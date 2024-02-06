import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import sign from '../assets/logo/signature.png'
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { Modal } from 'antd';
import toast from "react-hot-toast";
import axios from "axios";

const linkStyle = {
  color: 'white',
  textDecoration: "none", // Remove underline
};

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Handling login form data start from here
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/v1/auth/login`,formData)
      toast.success(res.data.message)
      //once form is submitted then form wiil be empty
      setFormData({
        email: '',
        password: '',
      })
      navigate('/about')
    
      
    } catch (error) {
      toast.error(`something went wrong ${error}`)
      
    }
  }


  // login form Handling data end here

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
          <NavLink to={"/login"} onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Login</NavLink>
          
        </ul>
      </nav>


      {/* register form data */}
      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <div className="formContainer">
          <img className="registerImg" src="/img/login.png" alt="" />
          <form className="registerForm" onSubmit={handleFormSubmit}>
            {/* <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleInputChange} /> */}
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={handleInputChange} />
            <button className="loginBtn" type="submit">Login</button>
            <p>Not Have an Account ? <Link to={'/register'}>Create Here</Link> </p>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
