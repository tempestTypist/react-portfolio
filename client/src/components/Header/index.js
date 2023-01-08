import React from 'react';
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import HeaderToggle from "../HeaderToggle";
import HeaderNav from "../HeaderNav";

const Header = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

	const scrollFunction = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			document.getElementById("header").style.visibility = "visible";
			document.getElementById("header").style.opacity = "1";
		} else {
			document.getElementById("header").style.visibility = "hidden";
			document.getElementById("header").style.opacity = "0";
		}
	}

	window.onscroll = function() { scrollFunction() };

  return (
		<motion.nav
			id="header"
			className="header-nav navbar navbar-expand-lg" 
			aria-label="Main navigation"
			initial={false}
			animate={isOpen ? "open" : "closed"}
			ref={containerRef}
			>
			<div className={isOpen ? "navbar-collapse offcanvas-collapse open" : "navbar-collapse offcanvas-collapse closed"}>
				<HeaderNav />
			</div>
			<HeaderToggle toggle={() => toggleOpen()} />
		</motion.nav>
  );
};

export default Header;