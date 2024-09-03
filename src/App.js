import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeChanger from './components/ThemeChanger';
import Loading from "./components/Loading";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
	const [theme, setTheme] = useState("default")

  useEffect(() => {
    import(`./assets/styles/${theme}-theme.css`);
  }, [theme]);

	// useEffect(() => {
  //   setTimeout(() => setLoading(false), 1200);
  // }, [loading]);

	// if (loading) {
  //   return (
	// 	<div className={"theme-" + theme}>
	// 		<Loading />
	// 	</div>
	// 	);
  // }

	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={"theme-" + theme}>
					<Header />
						<Container fluid>
							<Home theme={theme} />
							<About theme={theme} />
							<Work theme={theme} />
							<Contact theme={theme} />
						</Container>
						<ThemeChanger setTheme={setTheme} />
					<Footer />
				</div>
			</Suspense>
		</>
	);
};

export default App;
