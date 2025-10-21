import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ContactForm from '../ContactForm/ContactForm';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for Contact popup
  const [showNavbar, setShowNavbar] = useState(false); // State to manage navbar visibility

  // Toggle navbar visibility
  const toggleNavbar = () => setShowNavbar(!showNavbar);

  // Close navbar when a link is clicked (for mobile/tablet)
  const closeNavbar = () => setShowNavbar(false);

  return (
    <div className="header">
      <div className="header__left">
        <h1>Portfol<span>io</span></h1>
      </div>

      {/* Navbar links with conditional class for mobile visibility */}
      <div className={`header__right ${showNavbar ? 'show' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={closeNavbar}>
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={closeNavbar}>
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeNavbar}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeNavbar}>
          <h4>Projects</h4>
        </Link>
        <h4 className='header__rightbutton' onClick={() => { setIsOpen(true); closeNavbar(); }}>
          Contact
        </h4>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger__icon" onClick={toggleNavbar}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>

      {/* Contact Form Popup */}
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
