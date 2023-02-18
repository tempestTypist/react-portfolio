import React, { useState, useEffect } from "react"
import alien from "../assets/images/alien-head.png"
import alienLeft from "../assets/images/alien-hand-left.png"
import alienRight from "../assets/images/alien-hand-right.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState("Submit");

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
    const URL = "https://tempest-portfolio.herokuapp.com/contact"

    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formState),
    });
    
    let result = await response.json();
    alert(result.status);

    if (result.status === "Message Sent!") {
      resetForm();
    }

    setStatus("Submit");
  };

  const resetForm = () => {
    setFormState({ name: '', email: '', message: '',})
  }

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
        <form className="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="input-container">
            <input 
              type="text" 
              aria-describedby="name"
              id="name" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              required="required"
            />
            <label htmlFor="name">Name</label>
            <div className="bar"></div>
          </div>
          <div className="input-container">
            <input 
              type="email" 
              aria-describedby="email"
              id="email" 
              name="email" 
              value={formState.email} 
              onChange={handleChange} 
              required="required"
            />
            <label htmlFor="email">Email</label>
            <div className="bar"></div>
          </div>
          <div className="input-container">
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
            <label htmlFor="message">Message</label>
            <div className="bar"></div>
          </div>
          <div className="app-form-group text-center">
            <button 
              type="submit"
              className="btn">
                {status}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;