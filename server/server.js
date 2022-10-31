const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`App listening at port ${PORT} 🚀`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: email,
    to: process.env.USER, 
    subject: 'New Message from Contact Form',
    text: `name: ${name} \n email: ${email} \n message: ${message} `
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error)
      res.json({ status: "Message Failed to Send" });
    } else {
      res.json({ status: "Message Sent!" });
    }
  });
});