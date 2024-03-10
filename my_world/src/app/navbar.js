import React from 'react';
import "../asset/navbar.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
        My World
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#About">About Me</Link></li>
          <li><Link href="#my-work">My Work</Link></li>
          <li><Link href="#contact-me">Contact Me</Link></li>
          <div className='right'>
          </div> 
        </ul>
      </nav>
    </>
  );
};

export default Navbar;