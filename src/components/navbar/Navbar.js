import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png"
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar' fixed="top">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="logo"src = {logo}/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/stemKit'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              STEM Kit's 
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/Programs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Programs 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
             Book a Free Session
            </Link>
          </li>
        </ul>
        <Link to='sign-up'>
          <button className='button-s'>Book a Free Session</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;