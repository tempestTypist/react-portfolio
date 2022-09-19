import React from 'react';
import '../assets/styles/NavTabs.css';
import pfp from '../assets/images/pfp.png';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<aside className="sidebar">
  <div className="sidebar-header">
      <img className="sidebar-image" src={pfp} alt="User profile" />
  </div>
  <div className="sidebar-container">
      <ul className="side-nav">
      <li className="side-nav__item">
        <a 
          href="#home" 
          className={currentPage === 'Home' ? 'side-nav__link active' : 'side-nav__link'}
          onClick={() => handlePageChange('Home')}
          >
          Home
        </a>
      </li>
      <li className="side-nav__item">
          <a 
            href="#portfolio" 
            className={currentPage === 'Portfolio' ? 'side-nav__link active' : 'side-nav__link'}
            onClick={() => handlePageChange('Portfolio')}
            >
            Portfolio
          </a>
      </li>
      <li className="side-nav__item">
          <a 
            href="#about" 
            className={currentPage === 'About' ? 'side-nav__link active' : 'side-nav__link'}
            onClick={() => handlePageChange('About')}
            >
            About Me
          </a>
      </li>
      <li className="side-nav__item">
          <a 
            href="#contact" 
            className={currentPage === 'Contact' ? 'side-nav__link active' : 'side-nav__link'}
            onClick={() => handlePageChange('Contact')}
            >
            Contact
          </a>
      </li>
    </ul>
  </div>
</aside>
  );
}

export default NavTabs;
