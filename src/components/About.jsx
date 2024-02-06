import React from 'react';
import myImage from '../assets/logo/me.png'
import myResume from '../assets/logo/sunil.pdf'

import '../App.css';

const About = () => {
  return (
    <>
      <section className='about_container'>
        <div className="container aboutsec" data-aos="fade-right">
       
          <div className="about_left">
            <img className='myImage animImg' src={myImage} alt="myimage" />
            
               <div className="btns cvBtn">
                  <a href={myResume} download={myResume}>  <button className='btn hiremebtn'>DOWNLOAD CV</button></a>
                </div>
                

          </div>

          <div className="about_right">
          <div className="zigzigIcon">
        <img className='zigzagAbout' src="/zigzag/zigzag (2).png" alt="" />
      </div>
            <h3><strong className='strong'>ABOUT ME</strong></h3>
            <h2 className='heading'>Journey from Intern to Developer</h2>
            {/* <h1 className='heading'>I'm a Freelancer, I work <br /> from Anywhere</h1> */}
            <p className='subPara'>I'm a full-stack web developer who's spent three months as an intern and six months working at AavaTechNepal. During my time there, I learned how to create both the parts of a website you see (the front-end) and the behind-the-scenes stuff (the back-end). I got to work on different projects and even teamed up with different people to make sure everything worked smoothly.</p> <br />
            <p className='subPara'>I really care about making websites that are easy to use and work well. I also keep up with the latest tech trends to make sure I'm using the best tools. My internship and work experience at AavaTechnepal have given me a solid foundation in web development, and I'm excited to keep using my skills to help with cool projects in the future.</p>

            <div className="myDetails">

              <div className="myDetails_left">
                <h2>NAME</h2>
                <p className='subPara para'>Suniel Sharma</p>
                <h2>PHONE</h2>
                <p className='subPara para'>+977 9807865665</p>
                <h2>EMAIL</h2>
                <p className='subPara para'>sunielsharma1921@gmail.com</p>
              </div>

              {/* <div className="btns">
                  <a href={myImage} download={myImage}>  <button className='btn hiremebtn'>DOWNLOAD CV</button></a>
                </div> */}


              <div className="myDetails_right">
                <h2>AGE</h2>
                <p className='subPara para'>22</p>
                <h2>EDUCATION</h2>
                <p className='subPara para'>Bachelor in Computer Science</p>
                <h2>FREELANCE</h2>
                <p className='subPara para'>Available</p>

              </div>

            </div>


          </div>

        </div>
      </section>
    </>
  )
}

export default About