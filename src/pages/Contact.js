import React, { useState, useEffect } from "react"
import alien from "../assets/images/alien-head.png"
import alienHand from "../assets/images/alien-hand.png"
import speaker from "../assets/images/default/speakersL.gif"
import okHand from "../assets/images/vaporwave/ok-hand.gif"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment, faMinus, faX } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm/'

const Contact = ({ theme }) => {
  const [contactTitle, setTitle] = useState("Give me a shout!")
  const [titleImg, setImg] = useState()


  const formInputs = [{
    type: "text",
    label: "name",
    icon: <FontAwesomeIcon className="icon me-2" icon={faUser} />
  }, {
    type: "email",
    label: "email",
    icon: <FontAwesomeIcon className="icon me-2" icon={faEnvelope} />
  }, {
    type: "textarea",
    label: "message",
    icon: <FontAwesomeIcon className="icon me-2" icon={faComment} />,
    rows: 4
  }]

  useEffect(() => {
    if (theme === "space") {
      setTitle("MAKE CONTACT");
      setImg(alienHand);
    } else if (theme === "vaporwave") {
      setTitle("");
      setImg(null);
    } else {
      setTitle("Give me a Shout!")
      setImg(speaker);
    }
  }, [theme]);

  return (
    <Row as={"section"} id="contact">
      <Col className="d-flex justify-content-center">
        <div className="card">
          <div className="card-body d-flex justify-content-center">

            {theme === "space" && <img src={alien} alt="Alien" className="card__image" />}

            {theme === "vaporwave" && 
              <div className="window-header">
                <div className="header-buttons">
                  <FontAwesomeIcon className="icon" icon={faMinus} />
                  <FontAwesomeIcon className="icon" icon={faSquare} /> 
                  <FontAwesomeIcon className="icon" icon={faX} />
                </div>
              </div>}

            <div className="d-flex flex-row align-items-end mb-4">
              <img src={titleImg} className="contact-title-img" />
              <span className="card-title px-4">{contactTitle}</span>
              <img src={titleImg} className="contact-title-img flip" />
            </div>

            {/* <ContactForm formInputs={formInputs} btnLabel={"Submit"} /> */}
            <p>theTempestTypist@gmail.com</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;