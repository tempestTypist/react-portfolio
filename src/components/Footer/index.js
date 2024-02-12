import React from 'react';
import divider from "../../assets/images/default/footer-divider.svg"

const Footer = () => {
  
  return (
		<>
		<img src={divider} className="w-100 footer-divider" />
		<footer className="row text-light">
			<div className="col-12 p-3 text-center">
				<small className="d-block my-2">Made with <span className="footer-heart">💜</span></small>
			</div>
		</footer>
		</>
  );
};

export default Footer;