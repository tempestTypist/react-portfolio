import React, { useRef } from 'react'
import minime from '../assets/images/mini-me.png'

export default function Home() {

  const handleMouseMove = (event) => {
    let stars = document.getElementById('stars')
    let planets = document.getElementById('planets')
    let s = stars.getBoundingClientRect()
    let p = planets.getBoundingClientRect()

    planets.style.setProperty('--x', event.clientX - (s.left + Math.floor(s.width / 2)))
    stars.style.setProperty('--x', event.clientX - (s.left + Math.floor(s.width / 2)))
    stars.style.setProperty('--y', event.clientY - (p.top + Math.floor(p.height / 2)))
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
    <div id="planets" className="planets row g-0">
    </div>
    <div className="hero">
      <div className="hero-text col-12 offset-md-4 col-md-4">
        <p className="lead px-4">hi there! i'm</p>
        <h1 className="display-4 px-4">Summer Villeneuve</h1>
      </div>
      <div className="hero-img-wrapper col-12 col-md-4">
        <img className="hero-img" src={minime} />
      </div>
    </div>
  </section>
  );
}