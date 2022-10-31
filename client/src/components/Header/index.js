import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import HeaderToggle from "../HeaderToggle";
import HeaderNav from "../HeaderNav";

const Header = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  
	const collapseNav = () => {
		document.querySelector('.offcanvas-collapse').classList.toggle('open')
	}

	window.onscroll = function() {scrollFunction()};

	const scrollFunction = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			// document.getElementById("header").style.backgroundColor = "#6f42c1";
			document.getElementById("header").style.visibility = "visible";
			document.getElementById("header").style.opacity = "1";
		} else {
			// document.getElementById("header").style.backgroundColor = "transparent";
			document.getElementById("header").style.visibility = "hidden";
			document.getElementById("header").style.opacity = "0";
		}
	}

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
	// 	<div className="container-fluid">
	// 		<button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" onClick={collapseNav}>
	// 			<span className="navbar-toggler-icon"></span>
	// 		</button>

	// 		<div className="navbar-collapse offcanvas-collapse">
	// 			<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
	// 				<li className="nav-item">
	// 					<NavLink 
	// 						smooth
	// 						to={ "/#home" } 
	// 						className="nav-link">
	// 							Home
	// 					</NavLink>
	// 				</li>
	// 				<li className="nav-item">
	// 					<NavLink 
	// 						smooth
	// 						to={ "/#about"} 
	// 						className="nav-link">
	// 							About
	// 					</NavLink>					
	// 				</li>
	// 				<li className="nav-item">
	// 					<NavLink 
	// 						smooth
	// 						to={ "/#work" }
	// 						className="nav-link">
	// 							Work
	// 					</NavLink>					
	// 				</li>
	// 				<li className="nav-item">
	// 					<NavLink 
	// 						smooth
	// 						to={ "/#contact" }
	// 						className="nav-link">
	// 							Contact
	// 					</NavLink>					
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	</div>
  );
};

export default Header;