import React, { useEffect } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import alien from "../assets/images/alien-head.png"
import alienLeft from "../assets/images/alien-hand-left.png"
import alienRight from "../assets/images/alien-hand-right.png"
import divider from "../assets/images/default/divider.svg"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'

const serviceID = process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID || process.env.USER_ID;

const Contact = ({ theme }) => {

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
    if (inView) {
      control.start("show");
    } 
  }, [control, inView]);

  return (
    <>
      <section 
        id="contact" 
        className="py-3">

        <motion.div 
          ref={ref}
          className="card p-4"
          variants={sectionVariant}
          initial="hidden"
          animate={control}>
          {theme === "space" ? 
            <>
              <img src={alien} alt="Alien" className="card__image" />
              <div className="d-flex flex-row align-items-end mb-4">
                <img src={alienLeft} alt="Alien peace sign" className="alien-hand-left" />
                <span className="card-title px-4">MAKE CONTACT</span>
                <img src={alienRight} alt="Alien peace sign" className="alien-hand-right" />
              </div>
            </> : <></>
          }
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
                <FontAwesomeIcon className="icon" icon={faUser} />
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
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
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
                <FontAwesomeIcon className="icon" icon={faComment} />
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
        </motion.div>

      </section>
      <img src={divider} className="w-100" />
    </>
  );
};

export default Contact;