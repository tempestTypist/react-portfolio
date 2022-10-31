import { React, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = (event) => {
      console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
		<>
			<Header />
				<Row>
					<Col>
						<main>
							<Home />
							<About />
							<Work />
							<Contact />
						</main>
					</Col>
				</Row>
			<Footer />
		</>
	);
};

export default App;
