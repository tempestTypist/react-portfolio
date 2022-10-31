import React, { useState, useRef, useEffect } from 'react'
import { m, motion, LazyMotion, domAnimation, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slide = (props) => {
  const control = useAnimation()
	const [ref, inView] = useInView()
  const sectionVariant = {

  };

  const { src, dsc, headline, index, href } = props.slide
  const current = props.current
  let classNames = 'slide'
  const slide = useRef(null)
  
  if (current === index) classNames += ' slide--current'
  else if (current - 1 === index) classNames += ' slide--previous'
  else if (current + 1 === index) classNames += ' slide--next'
  
  const handleSlideClick = (event) => {
    props.handleSlideClick(props.slide.index)
  }
  
  const imageLoaded = (event) => {
    event.target.style.opacity = 1
  }
  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <motion.li 
      ref={slide}
      className={classNames} 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={sectionVariant}
      onClick={handleSlideClick}
    >

      <div className="card shadow-sm border-0 rounded">
        <div className="slide__image-wrapper">
          <img 
            src={src}
            alt={headline} 
            onLoad={imageLoaded}
            className="w-100 slide__image" 
          />
        </div>
        <div className="card-body p-0">
          <div className="p-4">
            <h5 className="mb-0">{headline}</h5>
            <p className="small">{dsc}</p>
            <a href={href} target="_blank" rel="noopener noreferrer"><button type="button" className="btn">Check it out</button></a>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default Slide;