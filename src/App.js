import { useEffect, useState, Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from './context/ThemeContext';
import { ThemeChanger } from './components/ThemeChanger';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Loading from "./components/Loading";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';

const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
	const [theme, setTheme] = useState("default")
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true);

		import(`./assets/${theme}-theme/styles/${theme}-theme.css`)
			.finally(() => {
				setTimeout(() => setLoading(false), 900);
			});
	}, [theme]);

	if (isLoading) {
    return (
		<div className={"theme-" + theme}>
			<Loading />
		</div>
		);
  }

	return (
		<ThemeContext.Provider value={{ theme, setTheme, setLoading }}>
			<Suspense fallback={<Loading />}>
				<div className={"theme-" + theme}>
					<Header />
						<Container fluid>
							<Home />
							<About />
							<Work />
							<Contact />
						</Container>
						<ThemeChanger />
					<Footer />
				</div>
			</Suspense>
		</ThemeContext.Provider>
	);
};

export default App;
