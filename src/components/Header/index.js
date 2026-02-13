import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import HeaderToggle from "./headerToggle";
import HeaderNav from "./headerNav";
import './style.css';

const Header = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [visible, setVisible] = useState(false) 
	const [position, setPosition] = useState(document.documentElement.scrollTop)

	useEffect(() => {
		const handleScroll = () => {
			let moving = document.documentElement.scrollTop
			
			setVisible(position < moving || position > 100);
			setPosition(moving);
		};

		window.addEventListener("scroll", handleScroll);

		return(() => {
			window.removeEventListener("scroll", handleScroll);
		})
  });

  return (
		<motion.nav
			id="header"
			className={`header-nav navbar navbar-expand-md ${visible ? "visible" : "hidden"}`}
			aria-label="Main navigation"
			initial={false}
			animate={isOpen ? "open" : "closed"}
			>
			<div className={`navbar-collapse offcanvas-collapse ${isOpen ? "open" : "closed"}`}>
				<HeaderNav />
			</div>
			<HeaderToggle toggle={() => toggleOpen()} />
		</motion.nav>
  );
};

export default Header;