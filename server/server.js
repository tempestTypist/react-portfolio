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
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const creds = require('./config/connection');
const PORT = 3002;
let transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
    user: creds.USER,
    pass: creds.PASS
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
app.use(cors())
app.use(express.json())
app.use('/', router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);