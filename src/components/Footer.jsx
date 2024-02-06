import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className='footermain'>
        <div className='footer'>
        <div className='footerContent'>
        <img className='footerImg' src="/bg/me1.png" alt="" />
        <h3>All Right Reserved &copy; 2022 || Suniel Sharma</h3>

        <div className="socialIcon">
        <a href="https://www.linkedin.com/in/suniel-sharma/" target='blank'><FaLinkedin/></a>
        <a href="https://github.com/Suniel1921" target='blank' ><BsGithub/></a>
        <a href="https://www.instagram.com/logins89/" target='blank' ><FaInstagramSquare/></a>
        <a href="https://www.facebook.com/profile.php?id=100025601766364" target='blank' ><FaFacebookSquare/></a>
        </div>
        <p><i>"Fix bugs, create great solutions." 😊 #keepSmilling #KeepIterating</i></p>
        </div>


        </div>

        </footer>
    </>
  )
}

export default Footer