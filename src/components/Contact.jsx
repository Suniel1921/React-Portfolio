import React from 'react';
import locationIcon from '../assets/icon/icon.png'


const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="container contact">
          <div className='contact_content'>
            <h2>GET IN TOUCH</h2>
            {/* <p className='subPara'>Reach out anytime for collaboration, <br /> ideas, or questions. Let's connect.</p> */}
            <p className='subPara'>Feel free to reach out anytime. I'm eager to discuss ideas, <br /> collaborate, or answer questions. Let's connect and <br /> make great things happen.</p>
          </div>
          <div className="address" data-aos="fade-down">
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Address</h2>
                <p className='subPara'>Gaushala, Mahottari, Nepal</p>
              </div>
            </div>
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Phone</h2>
                <p className='subPara'>+977 9807865665</p>
              </div>
            </div>
            <div className='location'>
              <div className='address_image'><img src={locationIcon} alt="" /></div>
              <div className="address_content">
                <h2>Email</h2>
                <p className='subPara'>anielthakur1921@gmail.com</p>
              </div>
            </div>
          </div>


          <div className="message" data-aos="fade-right">
            <div className="left_Contact">
              <div className='location_maps'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9483.724427533569!2d85.32362098526642!3d27.719673468719524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1695956133499!5m2!1sen!2snp" ></iframe>
              </div>
            </div>

            <div className="right_Contact">
              <h2>Write me a message</h2>
              <form className='form'>
                <div className="input-row">
                  <input className='input' type="text" name="name" id="name" placeholder="Name*" required />
                  <input className='input' type="email" name="email" id="email" placeholder="Email*" required />
                </div>
                <div className="textarea-row">
                  <textarea className='textarea' name="message" id="message" placeholder="Your Message*" required></textarea>
                </div>
                <button className="btn hiremebtn sendMsg">Send Message</button>

              </form>
            </div>
          </div>

        </div>

      </div>




    </>
  )
}

export default Contact