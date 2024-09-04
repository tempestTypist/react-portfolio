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
	const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    import(`./assets/styles/${theme}-theme.css`);
		// setTimeout(() => setLoading(true), 1200);
		setTimeout(() => {
			setLoading(false);
		}, 1200);
  }, [theme, isLoading]);

	// useEffect(() => {
  //   setTimeout(() => setLoading(false), 1200);
  // }, [loading]);

	if (isLoading) {
    return (
		<div className={"theme-" + theme}>
			<Loading />
		</div>
		);
  }

	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className={"theme-" + theme}>
					{/* {loading && <Loading />} */}
					<Header />
						<Container fluid>
							<Home theme={theme} />
							<About />
							<Work />
							<Contact theme={theme} />
						</Container>
						<ThemeChanger setTheme={setTheme} setLoading={setLoading} />
					<Footer />
				</div>
			</Suspense>
		</>
	);
};

export default App;
