import { Row } from 'react-bootstrap'
import { AnimatedTitle } from '../AnimatedTitle/index.js'

const VaporwaveBanner = () => {

	return (
		<Row as={"section"} id="home" className="banner">
			<div className="hero">
				<div className="title-wrapper">
					<AnimatedTitle>Summer Villeneuve</AnimatedTitle>
				</div>
				<div className="lines"></div>
			</div>
		</Row>
	);
}

export default VaporwaveBanner;