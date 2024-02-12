import React from 'react'
import minime from '../assets/images/mini-me.png'
import neonT from '../assets/images/default/neon-tl.svg'
import neonB from '../assets/images/default/neon-br.svg'
import { motion } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap';

const Home = ({ theme }) => {

  const handleMouseMove = (event) => {
    let stars = document.getElementById('stars')
    let hero = document.getElementById('hero')
    let s = stars.getBoundingClientRect()
    let h = hero.getBoundingClientRect()

    hero.style.setProperty('--x', event.clientX - (s.left + Math.floor(s.width / 2)))
    stars.style.setProperty('--x', event.clientX - (s.left + Math.floor(s.width / 2)))
    stars.style.setProperty('--y', event.clientY - (h.top + Math.floor(h.height / 2)))
  }
  
  const handleMouseLeave = () => {    
    let stars = document.getElementById('stars')
    stars.style.setProperty('--x', 0)
    stars.style.setProperty('--y', 0)
  }

  if (theme === "space") {
    return (
      <Row as={"section"} id="home" className="banner"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
        <div id="stars" className="stars">
        </div>
        <div id="hero" className="hero">
          <motion.div className="hero-text col-12 offset-md-4 col-md-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
            <p className="lead px-4">hi there! i'm</p>
            <h1 className="display-4 px-4">Summer Villeneuve</h1>
          </motion.div>
          <div className="hero-img-wrapper col-12 col-md-4">
            <motion.img 
              className="hero-img" 
              initial={{ y: -800 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1.8,
                delay: 0.5
              }}
              src={minime} 
              alt="Mini-me"/>
          </div>
        </div>
      </Row>
    )
  }

  if (theme === "tarot") {
    return (
      <section className="banner">
          <div class="box-canvas">
            <div class="puddle"></div>
            <div class="candle">
              <div class="drip"></div>
              <div class="drip-left"></div>
            </div>
            <div class="flame-wrapper">
              <div class="flame-outer"></div>
              <div class="flame-inner"></div>
            </div>
            <div class="wick"></div>
          </div>
      </section>
    );
  }

  return (
    <Row as={"section"} id="home" className="banner">
      <div className="hero">
        <motion.img 
          className="neon-lights-top" 
          initial={{ x: -500, y: -500 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            stiffness: 30,
            duration: 1,
            delay: 0.3
          }}
          src={neonT} 
          alt="Neon Lights"
        />
          <motion.div className="hero-text col-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
            <p className="lead m-0">hi there! i'm</p>
            <h1 className="display-4 px-4">Summer Villeneuve</h1>
          </motion.div>
        <motion.img 
          className="neon-lights-bot" 
          initial={{ x: 500, y: 500 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            stiffness: 30,
            duration: 1,
            delay: 0.3
          }}
          src={neonB} 
          alt="Neon Lights"
        />
      </div>
    </Row>
  );
}

export default Home;