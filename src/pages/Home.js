import React from 'react'
import minime from '../assets/images/mini-me.png'
import { motion } from "framer-motion"

const Home = () => {

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

  return (
    <section id="home" className="banner"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
      <div id="stars" className="stars">
      </div>
      <div id="hero" className="hero">
        <div className="hero-text col-12 offset-md-4 col-md-4">
          <p className="lead px-4">hi there! i'm</p>
          <h1 className="display-4 px-4">Summer Villeneuve</h1>
        </div>
        <div className="hero-img-wrapper col-12 col-md-4">
          <motion.img 
            className="hero-img" 
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1.8
            }}
            src={minime} 
            alt="Mini-me"/>
        </div>
      </div>
    </section>
  );
}

export default Home;