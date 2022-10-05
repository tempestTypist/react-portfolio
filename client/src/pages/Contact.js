import React, { useState } from "react";
import vintage from "../assets/images/vintage-comic.png"

const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState("Submit");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const PORT = process.env.PORT || 5000;
    const URL = process.env.URL || `http://localhost:${PORT}/contact`
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  //   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:3002/send', {
//         method: "POST",
//         body: JSON.stringify(formState),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       }).then(
//       (response) => (response.json())
//         ).then((response)=> {
//       if (response.status === 'success') {
//         alert("Message Sent.");
//       } else if(response.status === 'fail') {
//         console.log(response.error, response.datta)
//         alert("Message failed to send.")
//       }
//     })
//   }

  return (
    <section id="contact" className="py-3">
      <div className="card p-4">
        <img src={vintage} alt="Vintage comic-style woman on phone" className="card__image" />
        <div className="card-title">
          <span>CONTACT ME</span>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
          <div class="input-container">
            <input 
              type="text" 
              aria-describedby="name"
              id="name" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              required="required"
            />
            <label for="name">Name</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input 
              type="text" 
              aria-describedby="email"
              id="email" 
              name="email" 
              value={formState.email} 
              onChange={handleChange} 
              required="required"
            />
            <label for="email">Email</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input 
              type="text"  
              aria-describedby="message"
              id="message" 
              name="message" 
              value={formState.message} 
              onChange={handleChange} 
              rows="4"
              required="required"
            />
            <label for="message">Message</label>
            <div class="bar"></div>
          </div>
          <div className="app-form-group buttons">
            <button 
              type="submit"
              className="btn">{status}</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;








//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState("Submit");

//   // const handleFormSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setStatus("Sending...");
//   //   const { name, email, message } = e.target.elements;
//   //   let details = {
//   //     name: name.value,
//   //     email: email.value,
//   //     message: message.value,
//   //   };
//   //   let response = await fetch("http://localhost:5000/contact", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json;charset=utf-8",
//   //     },
//   //     body: JSON.stringify(details),
//   //   });
//   //   setStatus("Submit");
//   //   let result = await response.json();
//   //   alert(result.status);
//   // };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   }

//   // const resetForm = () => {
//   //   setFormState({
//   //     name: '',
//   //     email: '',
//   //     message: '',
//   //   });
//   // }

//   // function handleFormSubmit(e) {
//   //   e.preventDefault();
//   //   fetch('http://localhost:3002/send', {
//   //       method: "POST",
//   //       body: JSON.stringify(formState),
//   //       headers: {
//   //         'Accept': 'application/json',
//   //         'Content-Type': 'application/json'
//   //       },
//   //     }).then(
//   //     (response) => (response.json())
//   //       ).then((response)=> {
//   //     if (response.status === 'success') {
//   //       alert("Message Sent.");
//   //       this.resetForm()
//   //     } else if(response.status === 'fail') {
//   //       alert("Message failed to send.")
//   //     }
//   //   })
//   // }

  
//   // const handleFormSubmit = (e) => {
//   //   e.preventDefault();
//   //   fetch('http://localhost:3002/send', {
//   //     method: "POST",
//   //     body: JSON.stringify(formState),
//   //     headers: {
//   //       'Accept': 'application/json',
//   //       'Content-Type': 'application/json'
//   //     },
//   //   }).then(
//   //   (response) => (response.json())
//   //     ).then((response) => {
//   //   if (response.status === 'success') {
//   //     alert("Message Sent.");
//   //     // resetForm()
//   //   } else if (response.status === 'fail') {
//   //     console.log(response.error, response.data)
//   //     alert("Message failed to send.")
//   //   }
//   // })
//   // }

//   // if (status) {
//   //   return (
//   //     <>
//   //       <div className="text-2xl">Thank you!</div>
//   //       <div className="text-md">I'll be in touch soon.</div>
//   //     </>
//   //   );
//   // }
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:3002/send', {
//         method: "POST",
//         body: JSON.stringify(formState),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       }).then(
//       (response) => (response.json())
//         ).then((response)=> {
//       if (response.status === 'success') {
//         alert("Message Sent.");
//       } else if(response.status === 'fail') {
//         console.log(response.error, response.datta)
//         alert("Message failed to send.")
//       }
//     })
//   }
// }

// export default Contact