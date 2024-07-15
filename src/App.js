import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeChanger from './components/ThemeChanger';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Loading from "./components/Loading";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

const App = () => {
	const [theme, setTheme] = useState("default")
	const [loading, setLoading] = useState(false);

	useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, [loading]);

	if (loading) {
    return (
		<div className={"theme-" + theme}>
			<Loading />
		</div>
		);
  }

	return (
		<div className={"theme-" + theme}>
			<Header />
				<Container fluid>
					<Home theme={theme} />
					<About theme={theme} />
					<Work theme={theme} />
					<Contact theme={theme} />
				</Container>
				<ThemeChanger setTheme={setTheme} setLoading={setLoading} />
			<Footer />
		</div>
	);
};

export default App;
