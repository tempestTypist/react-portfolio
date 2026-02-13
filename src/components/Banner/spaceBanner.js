import { useState } from 'react'
import { motion } from 'framer-motion'
import { Row } from 'react-bootstrap'
import minime from '../../assets/space-theme/images/mini-me.png'

const SpaceBanner = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const bannerBounds = document.getElementById('hero').getBoundingClientRect()
    setX(e.clientX- bannerBounds.x - bannerBounds.width / 2)
    setY(e.clientY - bannerBounds.y - bannerBounds.height / 2)
  }

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
  );
}

export default SpaceBanner;