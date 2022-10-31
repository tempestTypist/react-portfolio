import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const App = () => {
	const control = useAnimation()
	const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 

    const handleScroll = (event) => {
      console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [control, inView]);

	return (
		<>
			<Header />
				<Row>
					<Col>
						<main>
							<Home />
							{/* <motion.div
								ref={ref}
								variants={boxVariant}
								initial="hidden"
								animate={control}> */}
									<About />
							{/* </motion.div> */}
							{/* <motion.div
								ref={ref}
								variants={boxVariant}
								initial="hidden"
								animate={control}> */}
									<Work />
							{/* </motion.div> */}
							<motion.div
								ref={ref}
								variants={boxVariant}
								initial="hidden"
								animate={control}>
									<Contact />
							</motion.div>
							{/* <Routes>
								<Route exact path="/#home" component={<Home />} />
							</Routes>
							<Routes>
								<Route exact path="/#about" component={<About />} />
							</Routes>
							<Routes>
								<Route exact path="/#work" component={<Work />} />
							</Routes>
							<Routes>
								<Route exact path="/#contact" component={<Contact />} />
							</Routes> */}
						</main>
					</Col>
				</Row>
			<Footer />
		</>
	);
};

export default App;
