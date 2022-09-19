import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  
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
	<nav id="header" className="header-nav navbar navbar-expand-lg" aria-label="Main navigation">
		<div className="container-fluid">
			<button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" onClick={collapseNav}>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="navbar-collapse offcanvas-collapse">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#work">Work</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">Contact</a>
					</li>
					{/* <li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Theme</a>
						<ul className="dropdown-menu" aria-labelledby="dropdown01">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
						</ul>
					</li> */}
				</ul>
			</div>

			{/* <div className="social-media order-lg-last">
				<p className="mb-0 d-flex">
					<a href="#" className="d-flex align-items-center justify-content-center">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="#" className="d-flex align-items-center justify-content-center">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="#" className="d-flex align-items-center justify-content-center">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</p>
			</div> */}

		</div>
	</nav>
  );
};

export default Header;