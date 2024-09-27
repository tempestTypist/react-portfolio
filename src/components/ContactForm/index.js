import React, { useState, useEffect, useRef } from "react"
// import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Container, Row, Col } from 'react-bootstrap'
import ContactFormInput from '../ContactFormInput/'
import emailjs from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID || process.env.USER_ID;

const ContactForm = ({ formInputs, btnLabel }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
  <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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