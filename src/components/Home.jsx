import React, { useEffect, useState } from 'react';
import myImage from '../assets/logo/me1.png';
import stack1 from '../assets/stack/stackicon (1).png';
import stack2 from '../assets/stack/stackicon (20).png';
import stack3 from '../assets/stack/stackicon (30).png';
import stack4 from '../assets/stack/stackicon (40).png';
import stack5 from '../assets/stack/stackicon (50).png';
import stack6 from '../assets/stack/stackicon (60).png';
import stack7 from '../assets/stack/stackicon (7).png';
import stack8 from '../assets/stack/stackicon (80).png';
import Card from './Card';
import About from './About';
import MySkill from './MySkill';
import Portfolio from './Portfolio';
import Contact from '../components/Contact';


const Home = () => {




  // State to store mouse coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to handle mousemove event
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };


  return (
    <>
     <div className="home_container ">
      <div className="home container" onMouseMove={handleMouseMove}>
        <section className='Me_center'>
          <img className='myImage animImg' src={myImage} alt="" />
          <p className='para'>Hello, My name is</p>
          <h1 className='heading'>Suniel <strong className='strong'>Sharma</strong> </h1>
          <p className='subPara'>"Full-stack Devs Craft <strong> Digital</strong> Experiences." </p>         

          <h3>fullStack Developer</h3>

          <div className="btns">
            <button className='btn hiremebtn'>HIRE ME</button>
            <button className='btn aboutemebtn'>ABOUT ME</button>
          </div>
        </section>

        <div className='stackIcon'>
          <div className="right_stack">
            <img
              src={stack1}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />

            <img
              src={stack2}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Invert X translation
              }}
            />

            <img
              src={stack3}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            <img
              src={stack4}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            <img
              src={stack5}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            <img
              src={stack6}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(-${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            <img
              src={stack7}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(${mousePosition.x / 20}px, -${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            <img
              src={stack8}
              alt=""
              style={{
                width: '90%', // Set a fixed width
                height: 'auto', // Maintain aspect ratio
                transform: `translate(${mousePosition.x / 20}px, -${mousePosition.y / 20}px)`, // Adjust the divisor for the desired effect
              }}
            />
            {/* Repeat the above img elements for other images */}
          </div>

          <div className="left_stack"></div>
        </div>
      </div>
      </div>

      {/* Rest of your components */}
      <div>
        <Card />
      </div>

      <div className="aboutme">
        <About />
      </div>

      <div className="myskills">
        <MySkill />
      </div>
      <div className="Portfolio">
        <Portfolio />
      </div>
      <div className="contact">
        <Contact />
      </div>
      
    </>
  );
};

export default Home;














