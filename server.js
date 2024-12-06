const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendmail = require('sendmail')();
const ee = require('@google/earthengine');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Google Earth Engine Service Account and Private Key
const PRIVATE_KEY = require(path.join(__dirname, 'salocean-harmony-a3c01f2b2a66.json')); // Replace with your actual key file path

// Authenticate with Google Earth Engine
ee.data.authenticateViaPrivateKey(PRIVATE_KEY, () => {
  ee.initialize(null, null, () => {
    console.log('Earth Engine initialized successfully!');

    app.get('/api/get-salinity-url', async (req, res) => {
      try {
        // Fetch salinity data from the HYCOM collection in GEE
        const salinityImage = ee.ImageCollection('HYCOM/sea_temp_salinity')
          .select('salinity_0')
          .first();

        const minValue = ee.ImageCollection('HYCOM/sea_temp_salinity')
          .select('salinity_0')
          .reduce(ee.Reducer.min())
          .get('salinity_0_min');

        const maxValue = ee.ImageCollection('HYCOM/sea_temp_salinity')
          .select('salinity_0')
          .reduce(ee.Reducer.max())
          .get('salinity_0_max');

        // Visualization parameters for the salinity data
        const visParams = {
          min: minValue,
          max: maxValue,
          palette: [
            '0000ff', // Deep Blue
            '00ffff', // Cyan
            '00ff00', // Green
            'ffff00', // Yellow
            'ffa500', // Orange
            'ff0000'  // Red
          ],
        };

        // Get a MapID for the salinity data
        salinityImage.getMap(visParams, (map, err) => {
          if (err) {
            console.error('Error generating salinity map:', err);
            res.status(500).json({ error: 'Failed to generate salinity map' });
          } else {

            console.log('Generated Map Object:', map); // Log the entire map object

            // **Use 'urlFormat' instead of 'tileUrlFormat'** 
            const url = map && map.urlFormat ? map.urlFormat : null; 

            if (url) {
              console.log('Generated Salinity Tile URL Format:', url);
              res.json({ url });
            } else {
              console.error('Failed to generate salinity URL. Map or urlFormat is undefined.');
              res.status(500).json({ error: 'Failed to generate salinity URL' });
            }
          }
        });

      } catch (error) {
        console.error('Error fetching salinity data:', error);
        res.status(500).json({ error: 'Failed to generate salinity URL' });
      }
    });

    // Start the server
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  }, (err) => {
    console.error('Failed to initialize Earth Engine:', err);
  });
}, (err) => {
  console.error('Failed to authenticate with Earth Engine:', err);
});

// Default route for testing
app.get('/', (req, res) => {
  console.log('Test endpoint hit');
  res.send('Test!');
});

// Contact email handler
app.post('/contactsend', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Email handler triggered...');

  sendmail({
    from: email,
    to: 'stephaniemfischer@students.abtech.edu',
    subject: 'Contact Form Submission',
    html: message
  }, function (err, reply) {
    if (err) {
      return res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  });
});
