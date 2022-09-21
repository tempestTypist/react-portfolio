// const express = require('express');
// const path = require('path');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const creds = require('./config/connection');
// const PORT = 3002;
// const app = express();

// const transport = {
//     host: 'smtp.gmail.com', 
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// const transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   let name = req.body.name
//   let email = req.body.email
//   let message = req.body.message
//   let content = `name: ${name} \n email: ${email} \n message: ${message} `

//   let mail = {
//     from: name,
//     to: 'thetempesttypist@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   })
// })

// app.use(cors())
// app.use(express.json())
// app.use('/', router)


let express = require('express');
const path = require('path');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const PORT = process.env.PORT || 3002;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const domainsFromEnv = process.env.CORS_DOMAINS || ""

// const creds = require('./config/connection');

const whitelist = domainsFromEnv.split(",").map(item => item.trim())
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}


let transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
}
let transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `
  let mail = {
    from: name,
    to: 'thetempesttypist@gmail.com', 
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use('/', router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
);

app.listen(process.env.PORT || PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);