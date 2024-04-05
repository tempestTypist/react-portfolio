import React, { useState, useEffect } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Container, Row, Col } from 'react-bootstrap'
import ContactFormInput from '../ContactFormInput/'

const serviceID = process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID || process.env.USER_ID;

const ContactForm = ({ formInputs, btnLabel }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID)
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
  <form className="contact-form" onSubmit={handleSubmit}>
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