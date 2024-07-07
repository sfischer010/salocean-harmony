
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/send', async (req, res) => {
  let { name, email, message } = req.body;

console.log('req.body TEST');
console.log(req.body);
  let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
   }
  });
    

  let mailOptions = {
    from: email,
    to: 'stephanief0101@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error');
      console.log(error);
      console.log(process.env.EMAIL);
      console.log(process.env.PASSWORD);
      res.status(500).send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});