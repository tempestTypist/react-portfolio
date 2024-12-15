import { useState } from 'react'

const Slide = (props) => {
  const { src, dsc, headline, index, href } = props.slide
  const current = props.current
  let classNames = 'slide'
  
  if (current === index) classNames += ' slide--current'
  else if (current - 1 === index) classNames += ' slide--previous'
  else if (current + 1 === index) classNames += ' slide--next'
  
  const handleSlideClick = (event) => {
    props.handleSlideClick(props.slide.index)
  }
  
  const imageLoaded = (event) => {
    event.target.style.opacity = 1
  }

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const resetMousePosition = () => {
    setX(0);
    setY(0);
  };

  const handleMouseMove = (e) => {
    const btnBounds = document.querySelector('.slide--current .btn').getBoundingClientRect()
    setX(e.clientX- btnBounds.x - btnBounds.width / 2)
    setY(e.clientY - btnBounds.y - btnBounds.height / 2)
  }

  return (
    <li 
      className={classNames} 
      onClick={handleSlideClick}
    >

      <div className="card border-0">
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
            <a href={href} target="_blank" rel="noopener noreferrer">
              <button 
                type="button" 
                className="btn" 
                onMouseMove={handleMouseMove} 
                onMouseLeave={() => {resetMousePosition()}}
                style={{"--x": x, "--y": y}}>
                  Check it out
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Slide;