import React from 'react';
import complogo1 from '../assets/logo/comp (1).png'
import complogo2 from '../assets/logo/comp (2).png'
import complogo3 from '../assets/logo/comp (3).png'
import complogo4 from '../assets/logo/comp (4).png'
import complogo5 from '../assets/logo/comp (5).png'
import complogo6 from '../assets/logo/comp (6).png'
import complogo7 from '../assets/logo/comp (7).png'
import complogo8 from '../assets/logo/comp (8).png'
import complogo9 from '../assets/logo/comp (9).png'

const MySkill = () => {
  return (
    <>
      <div className="myskill_container">
        <div className="container myskill">
          <div className="myskill_left" data-aos="fade-down">
            <h3><strong className='strong'>MY SKILLS</strong></h3>
            <h1 className='heading'>I'm great in what I do <br /> and I'm loving it</h1>
            <p className='subPara'>
              I have a broad range of skills as a full-stack developer. I can work on both the front-end and back-end of websites, using various programming languages and tools. I'm detail-oriented, good at solving problems, and keep up with the latest tech trends. I'm also a team player and can adapt to different project requirements</p>

          </div>

          <div className="myskill_right">

            <div className='circle'>
              <img className='nodejs' src="/language/nodejs2.png" alt="" />
              <img className='reactjs' src="/language/react.png" alt="" />
              <img className='expressjs logo' src="/language/express.png" alt="" />
              <img className='mongodb logo' src="/language/mongodb1.png" alt="" />
              {/* <img className='mysql logo' src="/language/mysql1.png" alt="" />  */}


              <div className="boldcircle">
                <img className='linux' src="/language/linux.png" alt="" />
                <img className='nginix' src="/language/nginix.png" alt="" />
                <img className='aws' src="/language/aws1.png" alt="" />
                <img className='docker' src="/language/docker.png" alt="" />
                <img className='photoshop' src="/language/photoshop.png" alt="" />
                <img className='tailwind' src="/language/tailwindcss.png" alt="" />
                <img className='js' src="/language/js.png" alt="" />
                <img className='bootstrap' src="/language/bootstrap.png" alt="" />
              </div>



            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default MySkill