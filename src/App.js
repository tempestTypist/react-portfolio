import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeChanger from './components/ThemeChanger';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

const App = () => {
	const [theme, setTheme] = useState("default")

	return (
		<div className={"theme-" + theme}>
			<Header />
				<Home theme={theme} />
				<About theme={theme} />
				<Work theme={theme} />
				<Contact theme={theme} />
				<ThemeChanger setTheme={setTheme} />
			<Footer />
		</div>
	);
};

export default App;
