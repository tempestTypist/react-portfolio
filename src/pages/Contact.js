import React, { useState, useEffect } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import alien from "../assets/images/alien-head.png"
import alienHand from "../assets/images/alien-hand.png"
import speaker from "../assets/images/default/speakersL.gif"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

const serviceID = process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID || process.env.USER_ID;

const Contact = ({ theme }) => {
  const [contactTitle, setTitle] = useState("Give me a shout!")
  const [titleImg, setImg] = useState()

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

  useEffect(() => {
    if (theme === "space") {
      setTitle("MAKE CONTACT");
      setImg(alienHand);
    } else {
      setTitle("Give me a Shout!")
      setImg(speaker);
    }
  }, [theme]);

  return (
    <Row as={"section"} id="contact">
      <Col lg={8}>
        <div className="card">
          <div className="card-body d-flex justify-content-center">
            {theme === "space" ? <img src={alien} alt="Alien" className="card__image" /> : null}
            <div className="d-flex flex-row align-items-end mb-4">
              <img src={titleImg} className="contact-title-img" />
              <span className="card-title px-4">{contactTitle}</span>
              <img src={titleImg} className="contact-title-img flip" />
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <input 
                  type="text" 
                  aria-describedby="name"
                  placeholder="Name"
                  className="form-control"
                  id="name" 
                  name="user_name" 
                  required
                />
                <label htmlFor="name">
                  <FontAwesomeIcon className="icon me-2" icon={faUser} />
                  <span className="label">Name</span>
                </label>
                <div className="bar"></div>
              </div>

              <div className="input-container">
                <input 
                  type="email" 
                  aria-describedby="email"
                  placeholder="E-mail"
                  className="form-control"
                  id="email" 
                  name="user_email" 
                  required
                />
                <label htmlFor="email">
                  <FontAwesomeIcon className="icon me-2" icon={faEnvelope} />
                  <span className="label">Email</span>
                </label>
                <div className="bar"></div>
              </div>

              <div className="input-container">
                <input 
                  type="text" 
                  aria-describedby="message"
                  placeholder="Message"
                  className="form-control"
                  id="message" 
                  name="user_message" 
                  required
                />
                <label htmlFor="message">
                  <FontAwesomeIcon className="icon me-2" icon={faComment} />
                  <span className="label">Message</span>
                </label>
                <div className="bar"></div>
              </div>

              <div className="text-center mb-2">
                <button 
                  type="submit"
                  className="btn">
                    Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;