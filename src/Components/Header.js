import React from 'react';
import './style.css';

function Header({ menuToggle }) {
  return (
    <header>
      <a href="#" className="logo">SmartML Labs<span>.</span></a>
      <div className="menuToggle" onClick={menuToggle}></div>
      <ul className="navigation">
        <li><a href="#banner" onClick={menuToggle}>Home</a></li>
        <li><a href="#services" onClick={menuToggle}>Services</a></li>
        <li><a href="#about" onClick={menuToggle}>About</a></li>
        <li><a href="#portfolio" onClick={menuToggle}>Portfolio</a></li>
        <li><a href="#team" onClick={menuToggle}>Team</a></li>
        <li><a href="#contact" onClick={menuToggle}>Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;
