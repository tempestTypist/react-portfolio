import { useState } from 'react'
import minime from '../assets/space-theme/images/mini-me.png'
import neonT from '../assets/default-theme/images/neon-tl.svg'
import neonB from '../assets/default-theme/images/neon-br.svg'
import { motion } from "framer-motion";
import { Row } from 'react-bootstrap';
import { AnimatedTitle } from "../components/AnimatedTitle/index.js";

const Home = ({ theme }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const bannerBounds = document.getElementById('hero').getBoundingClientRect()
    setX(e.clientX- bannerBounds.x - bannerBounds.width / 2)
    setY(e.clientY - bannerBounds.y - bannerBounds.height / 2)
  }

  if (theme === "space") {
    return (
      <Row as={"section"} id="home" className="banner" onMouseMove={handleMouseMove}>
        <div id="stars" className="stars" style={{"--x": x, "--y": y}}>
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
              loading="lazy"
              src={minime} 
              alt="Mini-me"/>
          </div>
        </div>
      </Row>
    )
  }

  if (theme === "vaporwave") {
    return (
      <Row as={"section"} id="home" className="banner">
        <div className="hero">
          <div className="title-wrapper">
            <AnimatedTitle>Summer Villeneuve</AnimatedTitle>
          </div>
          <div className="lines"></div>
        </div>
      </Row>
    )
  }

  if (theme === "tarot") {
    return (
      <section className="banner">
          <div className="box-canvas">
            <div className="puddle"></div>
            <div className="candle">
              <div className="drip"></div>
              <div className="drip-left"></div>
            </div>
            <div className="flame-wrapper">
              <div className="flame-outer"></div>
              <div className="flame-inner"></div>
            </div>
            <div className="wick"></div>
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
          loading="lazy"
          src={neonT} 
          alt="Neon Lights"
        />
          <motion.div className="hero-text"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
            <p className="lead m-0">hi there! i'm</p>
            <h1 className="display-4 px-4">Summer<br/>Villeneuve</h1>
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
          loading="lazy"
          src={neonB} 
          alt="Neon Lights"
        />
      </div>
    </Row>
  );
}

export default Home;