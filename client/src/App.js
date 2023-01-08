import { React } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

const App = () => {

	return (
		<>
			<Header />
				<Row>
					<Col>
						<Home />
						<About />
						<Work />
						<Contact />
					</Col>
				</Row>
			<Footer />
		</>
	);
};

export default App;
