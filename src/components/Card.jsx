import React from 'react';
import '../App.css';

//react icons
import { AiOutlineCode } from 'react-icons/ai';
import { BsRocketFill } from "react-icons/bs";
import { SiReactos } from "react-icons/si";




const Card = () => {
  return (
    <>
      <div className='cardsContainer'>     
        <section className='container'>
        <div className='zigzigIcon'>
        <img src="/zigzag/zigzag (1).png" alt="zigzigicon" />

        </div>
          <div className='cardContents'>
            <h2>WELCOME TO MY WORLD</h2>
            <p className='subPara'>I'm a young tech enthusiast who thrives on taking risks, born and raised in <br /> Gaushala-Mahottari, with a passion for web development.</p>
          </div>


          <div className="parentCards">
            <div className="card" data-aos="fade-up" data-aos-delay="200">
            <p><BsRocketFill size={44} style={{color: '#7371f9'}} /></p>
              <h2>Dedication</h2>
              <p className='subPara'>Dedication is like a full-stack developer's heart, keeping them committed to making websites and apps great.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="400">
            <p><AiOutlineCode size={44} style={{color: '#7371f9'}} /></p>
              <h2>Creativity</h2>
              <p className='subPara'>Creativity empowers developers to craft unique, user-centric, and visually appealing web solutions.</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="600">
            <p><SiReactos size={44} style={{color: '#7371f9'}}/></p>
              <h2>Hard Work</h2>
              <p className='subPara'> Hard work is the relentless effort that fuels a developer's journey toward excellence, growth, and accomplishments</p>
            </div>

          </div>

        </section>
      </div>
    </>
  )
}

export default Card







