// // const express = require('express');
// // const path = require('path');
// // const router = express.Router();
// // const nodemailer = require('nodemailer');
// // const cors = require('cors');
// // const creds = require('./config/connection');
// // const PORT = 3002;
// // const app = express();

// // const transport = {
// //     host: 'smtp.gmail.com', 
// //     port: 587,
// //     auth: {
// //     user: creds.USER,
// //     pass: creds.PASS
// //   }
// // }

// // const transporter = nodemailer.createTransport(transport)

// // transporter.verify((error, success) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log('Server is ready to take messages');
// //   }
// // });

// // router.post('/send', (req, res, next) => {
// //   let name = req.body.name
// //   let email = req.body.email
// //   let message = req.body.message
// //   let content = `name: ${name} \n email: ${email} \n message: ${message} `

// //   let mail = {
// //     from: name,
// //     to: 'thetempesttypist@gmail.com',
// //     subject: 'New Message from Contact Form',
// //     text: content
// //   }

// //   transporter.sendMail(mail, (err, data) => {
// //     if (err) {
// //       res.json({
// //         status: 'fail'
// //       })
// //     } else {
// //       res.json({
// //        status: 'success'
// //       })
// //     }
// //   })
// // })

// // app.use(cors())
// // app.use(express.json())
// // app.use('/', router)




// // const express = require("express");
// // const router = express.Router();
// // const cors = require("cors");
// // const nodemailer = require("nodemailer");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use("/", router);
// // app.listen(5000, () => console.log("Server Running"));

// // const contactEmail = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: "thetempesttypist@gmail.com",
// //     pass: "sccoaifeiiulddpu",
// //   },
// // });

// // contactEmail.verify((error) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Ready to Send");
// //   }
// // });

// // router.post("/contact", (req, res) => {
// //   const name = req.body.name;
// //   const email = req.body.email;
// //   const message = req.body.message; 
// //   const mail = {
// //     from: name,
// //     to: "thetempesttypist@gmail.com",
// //     subject: "Contact Form Message",
// //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
// //   };
// //   contactEmail.sendMail(mail, (error) => {
// //     if (error) {
// //       res.json({ status: "ERROR" });
// //     } else {
// //       res.json({ status: "Message Sent" });
// //     }
// //   });
// // });




// // const express = require('express');
// // const path = require('path');
// // const router = express.Router();
// // const nodemailer = require('nodemailer');
// // const cors = require('cors');
// // const creds = require('./config/connection');
// // const app = express();

// // const PORT = process.env.PORT || 3002;

// // if (process.env.NODE_ENV !== "production") {
// //   require("dotenv").config()
// // }

// // const domainsFromEnv = process.env.CORS_DOMAINS || ""
// // const whitelist = domainsFromEnv.split(",").map(item => item.trim())
// // console.log(whitelist)

// // const corsOptions = {
// //   origin: function (origin, callback) {
// //     if (!origin || whitelist.indexOf(origin) !== -1) {
// //       callback(null, true)
// //     } else {
// //       callback(new Error("Not allowed by CORS"))
// //     }
// //   },
// //   credentials: true,
// // }

// // let transport = {
// //     host: 'smtp.gmail.com',
// //     port: 587,
// //     auth: {
// //     user: process.env.USER,
// //     pass: process.env.PASS
// //   }
// // }

// // let transporter = nodemailer.createTransport(transport)
// // transporter.verify((error, success) => {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log('Server is ready to take messages');
// //   }
// // })

// // router.post('/send', (req, res, next) => {
// //   let name = req.body.name
// //   let email = req.body.email
// //   let message = req.body.message
// //   let content = `name: ${name} \n email: ${email} \n message: ${message} `
// //   let mail = {
// //     from: name,
// //     to: 'thetempesttypist@gmail.com', 
// //     subject: 'New Message from Contact Form',
// //     text: content
// //   }
// //   transporter.sendMail(mail, (err, data) => {
// //     if (err) {
// //       res.json({
// //         status: 'fail'
// //       })
// //     } else {
// //       res.json({
// //        status: 'success'
// //       })
// //     }
// //   })
// // })

// // app.use(cors(corsOptions))
// // app.use(express.json())
// // app.use('/', router)

// // if (process.env.NODE_ENV === 'production') {
// //   app.use(express.static(path.join(__dirname, '../client/build')));
// // }

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// // });

// // app.get('/', (req, res) =>
// //   res.sendFile(path.join(__dirname, '../client/public/index.html'))
// // );

// // app.listen(process.env.PORT || 3002, () =>
// //   console.log(`App listening at http://localhost:${PORT} 🚀`)
// // );






// var express = require('express');
// var router = express.Router();
// const path = require('path');
// var nodemailer = require('nodemailer');
// var cors = require('cors');
// const app = express()

// var transport = {
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//       user: 'thetempesttypist@gmail.com',
//       pass: 'sccoaifeiiulddpu'
//   }
// }
// var transporter = nodemailer.createTransport(transport)
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });
// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `
//   var mail = {
//     from: name,
//     to: 'thetempesttypist@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: content
//   }
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail',
//         error: err
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

// // if (process.env.NODE_ENV === 'production') {
// //   app.use(express.static(path.join(__dirname, '../client/build')));
// // }

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// // });

// // app.get('/', (req, res) =>
// //   res.sendFile(path.join(__dirname, '../client/public/index.html'))
// // );

// app.listen(3000, () =>
//   console.log(`App listening at http://localhost:3000/ 🚀`)
// );










const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server running!"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
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
    from: name,
    to: process.env.USER,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error)
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});




// var transport = {
//     host: 'smtp.gmail.com',
//     port: 587,
//     auth: {
//       user: process.env.USER,
//       pass: process.env.PASS
//     }
// }
// var transporter = nodemailer.createTransport(transport)
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });
// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `
//   var mail = {
//     from: name,
//     to: process.env.USER, 
//     subject: 'New Message from Contact Form',
//     text: content
//   }
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail',
//         error: err,
//         datta: data
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   })
// })
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// app.listen(3002)