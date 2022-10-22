import React, { useState, useRef } from 'react'

const Slide = (props) => {
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
    
  return (
    <li 
      ref={slide}
      className={classNames} 
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
    </li>
  )
}

export default Slide;