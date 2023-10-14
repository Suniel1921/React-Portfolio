import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import sign from '../assets/logo/signature.png'
import { BiMenuAltRight, BiX } from 'react-icons/bi';

const linkStyle = {
  color: 'white',
  textDecoration: "none", // Remove underline
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  }

  const closeMenu = () => {
    setShowMenu(false); // Close the menu
  }

  return (
    <div className={`navbar_bg ${showMenu ? 'mobile-bg' : ''}`}>
      <nav className="navbar container">
        <img className="logo" src={sign} alt="" />
       
        {showMenu ? (<a onClick={closeMenu} href="#" className="menu mobile-close"><BiX /></a>) 
        : (<a onClick={menuHandler} href="#" className="menu mobile-menu"><BiMenuAltRight /></a>)}

        <ul className={`navlinks ${showMenu ? 'active' : ''}`}>
          <NavLink to={"/"} style={linkStyle} onClick={closeMenu}>Home</NavLink>
          <NavLink to={"/about"} style={linkStyle} onClick={closeMenu}> About</NavLink>
          <NavLink to={"/services"} style={linkStyle} onClick={closeMenu}>Services</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


