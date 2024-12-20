import { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagic, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const ThemeChanger = ({ setTheme, setLoading }) => {
	const themeRef = useRef(null);
	const menuRef = useRef(null);
	const [toggle, setToggle] = useState(false);
	const [waveWand, setWaveWand] = useState(false);

	const changeTheme = (newTheme) => {
		setLoading(true);
		setTheme(newTheme);
	}

	useEffect(() => {
		const handleScroll = () => {
			const pageHeight = document.documentElement.scrollHeight;
			const scrollPosition = window.scrollY + window.innerHeight;

			if (scrollPosition >= pageHeight * 0.60 && !waveWand) {
				setWaveWand(true);
			} else if (scrollPosition < pageHeight * 0.60 && waveWand) {
				setWaveWand(false);
			}
		};

		const handleClickOutside = (e) => {
      if (toggle && 
					menuRef.current && 
					!menuRef.current.contains(e.target) && 
					!themeRef.current.contains(e.target)
					) { setToggle(false); console.log("outside clicked;toggle to false") }};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('click', handleClickOutside);

    return () => {
			window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
	}, [toggle, waveWand]);

	return (
		<div 
			ref={themeRef}
			className={`theme-changer${waveWand ? ' magic' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        setToggle(!toggle);
      }} 
			>
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
				<div ref={menuRef}>
					<div className="d-flex align-items-center mb-2">
						<FontAwesomeIcon icon={faWandMagic} size="xl" />
						<h3 className="ms-2 mb-0">Theme Changer</h3>
					</div>
					<ul className="list-group">
						<li className="list-group-item" onClick={() => changeTheme("default")}>Default</li>
						<li className="list-group-item" onClick={() => changeTheme("space")}>Space</li>
						<li className="list-group-item" onClick={() => changeTheme("vaporwave")}>Vaporwave</li>
					</ul>
				</div>
			)}
		</div>
	);
};