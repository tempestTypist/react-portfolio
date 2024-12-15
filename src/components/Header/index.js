import { useRef, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import HeaderToggle from "../HeaderToggle";
import HeaderNav from "../HeaderNav";
import './style.css';

const Header = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [visible, setVisible] = useState(false) 
	const [position, setPosition] = useState(document.documentElement.scrollTop)
	const headerClass = visible ? "visible" : "hidden"

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
			className={"header-nav " + headerClass + " navbar navbar-expand-md"}
			aria-label="Main navigation"
			initial={false}
			animate={isOpen ? "open" : "closed"}
			>
			<div className={isOpen ? "navbar-collapse offcanvas-collapse open" : "navbar-collapse offcanvas-collapse closed"}>
				<HeaderNav />
			</div>
			<HeaderToggle toggle={() => toggleOpen()} />
		</motion.nav>
  );
};

export default Header;