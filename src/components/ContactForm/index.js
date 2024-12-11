
import React, { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Container, Row, Col } from 'react-bootstrap'
import ContactFormInput from '../ContactFormInput'

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const ContactForm = ({ formInputs, btnLabel }) => {
  const form = useRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   let result = await response.json();
  //   alert(result.status);
  // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch('/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(details),
//   })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));
// }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serviceID + " " + templateID + " " + publicKey)
    // const { name, email, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };
    emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicKey
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });
      // try {
      //   const response = await fetch('/contact', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(form.current),
      //   });
    
      //   if (response.ok) {
      //     alert('Message sent successfully!');
      //   } else {
      //     alert('There was an error sending your message.');
      //   }
      // } catch (error) {
      //   alert('An unexpected error occurred.');
      //   console.error(error);
      // }
    e.target.reset()
  };

  return (
  <form ref={form} className="contact-form" onSubmit={handleSubmit}>
    {formInputs.map((input) => 
      <ContactFormInput {...input}/>)}


    <div className="text-center mb-2">
      <button 
        type="submit"
        className="btn">
          {btnLabel}
      </button>
    </div>

  </form>
  );
};

export default ContactForm;