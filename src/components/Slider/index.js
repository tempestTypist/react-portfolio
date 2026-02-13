import { useState } from 'react'
import Slide from './slide'
import SliderControl from './sliderControl'
import './style.css'

const Slider = (props) => {
  const { slides, heading } = props 

  const [slide, setSlide] = useState({
    items: [...slides],
    visibleItems: [],
    current: 0,
    direction: "",
  });

  const { items, current } = slide

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / slides.length)}%)`
  }

  const handlePreviousClick = () => {
    const previous = current - 1
    setSlide({ 
      ...slide,
      current: (previous < 0) 
        ? items.length - 1
        : previous,
      direction: "previous"
    })
  }
  
  const handleNextClick = () => {
    const newIndex = (current + 1) % items.length

    setSlide({ 
      ...slide,
      current: newIndex,
      direction: "next"
    })
  }
  
  const handleSlideClick = (index) => {
    if (current !== index) {
      setSlide({
        ...slide,
        current: index,
      })
    }
  }

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        
        {slides.map(item => {
          return (
            <Slide
              key={item.index}
              slide={item}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          )
        })}
      </ul>
      
      <div className="slider__controls">
        <SliderControl 
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        
        <SliderControl 
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Slider;