import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagic, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ThemeChanger = ({ theme, setTheme, setLoading }) => {
	const [toggle, setToggle] = useState(false)

  // const loadCSS = (theme) => {
  //   return new Promise((resolve, reject) => {
  //     const existingLink = document.querySelector(`link[data-theme="${theme}"]`);
	// 		console.log(existingLink)

  //     if (existingLink) {
  //       resolve();
	// 			console.log("theme already loaded")
  //       return;
  //     }

  //     const link = document.createElement('link');
  //     link.rel = 'stylesheet';
  //     link.href = `./assets/${theme}-theme/styles/${theme}-theme.css`;
  //     link.dataset.theme = theme;

  //     link.onload = () => resolve();
  //     link.onerror = (e) => reject(e);

  //     document.head.appendChild(link);
	// 		console.log("loadCSS; link created: " + theme)
  //   });
  // };

  // const unloadCSS = (theme) => {
  //   const link = document.querySelector(`link[data-theme="${theme}"]`);
	// 	console.log("unloadCSS: current style sheet:")
	// 	console.log(link)
  //   if (link) {
  //     document.head.removeChild(link);
	// 		console.log("unloadCSS; Previous theme removed.")
  //   }
  // };

  // const changeTheme = async (newTheme) => {
  //   setLoading(true);
  //   try {
	// 		console.log("changeTheme; currentTheme to be unloaded: " + theme)
  //     unloadCSS(theme);
	// 		console.log("changeTheme; newTheme: " + newTheme)
  //     await loadCSS(newTheme);
  //     setTheme(newTheme);
  //   } catch (error) {
  //     console.error('changeTheme; Error loading theme assets:', error);
  //   } finally {
	// 		return new Promise((resolve) => {
	// 			setTimeout(() => resolve(setLoading(false)), 1000);
	// 		});
  //   }
  // };

	const changeTheme = (newTheme) => {
		setLoading(true);
		setTheme(newTheme);
	}

	return (
		<div className="theme-changer" onClick={() => setToggle(!toggle)} >
			{toggle ? <></> : 
			<>
				<FontAwesomeIcon icon={faWandMagic} size="xl" />
				<FontAwesomeIcon icon={faStar} className="icon" size="xl" />
				<FontAwesomeIcon icon={faStar} className="icon" size="xl" />
				<FontAwesomeIcon icon={faStar} className="icon" size="xl" />
				<FontAwesomeIcon icon={faPlus} className="icon" size="xl" />
				<FontAwesomeIcon icon={faPlus} className="icon" size="xl" />
			</>}
			{toggle && (
				<>
				<div className="d-flex align-items-center mb-2">
					<FontAwesomeIcon icon={faWandMagic} size="xl" />
					<h3 className="ms-2 mb-0">Theme Changer</h3>
				</div>
				<ul className="list-group">
					<li className="list-group-item" onClick={() => changeTheme("default")}>Default</li>
					<li className="list-group-item" onClick={() => changeTheme("space")}>Space</li>
					<li className="list-group-item" onClick={() => changeTheme("vaporwave")}>Vaporwave</li>
				</ul>
				</>
			)}
		</div>
	);
};

export default ThemeChanger;