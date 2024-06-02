
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const SMTPServer = require("smtp-server").SMTPServer;
const sendmail = require('sendmail')();
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  console.log('test');
  res.send('Test!');
});


app.post('/contactsend', async (req, res) => {
  let { name, email, message } = req.body;

console.log('test................');
    
sendmail({
  from: email,
  to: 'stephanief_010@outlook.com',
  subject: 'Test sendmail 2',
  html: message
}, function(err, reply) {
  console.log(err && err.stack);
  console.dir(reply);
});



// Start the SMTP server
/*const SMTP_PORT = 25;
smtpServer.listen(SMTP_PORT, () => {
  console.log(`SMTP server listening on port ${SMTP_PORT}`);
});*/

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});