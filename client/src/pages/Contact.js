import React, { useEffect } from "react"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import alien from "../assets/images/alien-head.png"
import alienLeft from "../assets/images/alien-hand-left.png"
import alienRight from "../assets/images/alien-hand-right.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const SERVICE_ID = "service_adwgep2";
const TEMPLATE_ID = "template_j9jc5hc";
const USER_ID = "EAo2nt3-C2KMKWIZl";

const Contact = () => {
  const control = useAnimation()
	const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px 0px'
  })

  const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: .5
      } 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
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
    if (inView) {
      control.start("show");
    } 
  }, [control, inView]);

  return (
    <section 
      id="contact" 
      className="py-3">
      <motion.div 
        ref={ref}
        className="card p-4"
        variants={sectionVariant}
        initial="hidden"
        animate={control}>
        <img src={alien} alt="Alien" className="card__image" />
        <div className="d-flex flex-row align-items-end mb-4">
          <img src={alienLeft} alt="Alien peace sign" className="alien-hand-left" />
          <span className="card-title px-4">MAKE CONTACT</span>
          <img src={alienRight} alt="Alien peace sign" className="alien-hand-right" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input 
              type="text" 
              aria-describedby="name"
              id="name" 
              name="user_name" 
              required
            />
            <label htmlFor="name">Name</label>
            <div className="bar"></div>
          </div>
          <div className="input-container">
            <input 
              type="email" 
              aria-describedby="email"
              id="email" 
              name="user_email" 
              required
            />
            <label htmlFor="email">Email</label>
            <div className="bar"></div>
          </div>
          <div className="input-container">
            <input 
              type="text"  
              aria-describedby="message"
              id="message" 
              name="user_message" 
              required
            />
            <label htmlFor="message">Message</label>
            <div className="bar"></div>
          </div>
          <div className="app-form-group text-center">
            <button 
              type="submit"
              className="btn">
                Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;