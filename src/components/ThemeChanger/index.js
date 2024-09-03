import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagic, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const ThemeChanger = ({ setTheme }) => {
	const [toggle, setToggle] = useState(false)

	const changeTheme = (theme) => {
		setTheme(theme);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
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