import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Footer = () => {
  
  return (
		<footer className="row bg-black text-light mt-5">
			<div className="col-12 p-3 text-center">
				<small className="d-block my-2 text-muted">Made with <span className="footer-heart">💜</span></small>
			</div>
		</footer>
  );
};

export default Footer;