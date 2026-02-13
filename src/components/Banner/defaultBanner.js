import { motion } from 'framer-motion'
import { Row } from 'react-bootstrap'
import neonT from '../../assets/default-theme/images/neon-tl.svg'
import neonB from '../../assets/default-theme/images/neon-br.svg'

const DefaultBanner = () => {

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

export default DefaultBanner;