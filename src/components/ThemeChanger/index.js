import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const ThemeChanger = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className="theme-changer" onClick={() => setToggle(!toggle)} >
			{toggle ? <></> : <FontAwesomeIcon icon={faWandMagicSparkles} size="xl" />}
			{toggle && (
				<>
				<div className="d-flex align-items-center mb-2">
					<FontAwesomeIcon icon={faWandMagicSparkles} size="xl" />
					<h3 className="ms-2 mb-0">Theme Changer</h3>
				</div>
				<ul className="list-group">
					<li className="list-group-item">Default</li>
					<li className="list-group-item">Space</li>
					<li className="list-group-item">Goth</li>
					<li className="list-group-item">Arcade</li>
				</ul>
				</>
			)}
		</div>
	);
};

export default ThemeChanger;