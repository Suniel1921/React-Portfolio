import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

//pop box
function PopUp({ data, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <img className='portfolioImg' src={data.image} alt="" />
        <div className="popData">
          <p>icons</p>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function PortfolioCard({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All'); // Added state for active category

  const filterHandler = (category) => {
    setActiveCategory(category); // Set the active category
    if (category === 'All') {
      setFilteredData(data); // Show all items when 'All' is clicked
    } else {
      const filteredItems = data.filter((currElem) => currElem.category === category);
      setFilteredData(filteredItems); // Update state with filtered data
    }
  };

  const handleCardClick = (data) => {
    setSelectedData(data);
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setSelectedData(null);
    setPopUpVisible(false);
  };

  return (
    <>
      <div className='portfolio_container'>
        <div className='container portfolio'>
          <div className='zigzigIcon'>
            <img src="/zigzag/zigzag (3).png" alt="" />
          </div>
          <h2>PORTFOLIO</h2>
          <p className='subPara'>Creating with MERN (MongoDB, Express, React, Node.js) is my passion. <br /> I build dynamic, interactive web applications from start to finish.</p>
          {/* <p className='subPara'>A MERN full-stack project unites MongoDB, Express, React, and Node.js,<br /> demonstrating end-to-end web development expertise.</p> */}

          <div className="filterBtn">
            <button onClick={() => filterHandler('All')} className={`button ${activeCategory === 'All' ? 'selected' : ''}`}>All</button>
            <button onClick={() => filterHandler('Programming')} className={`button ${activeCategory === 'Programming' ? 'selected' : ''}`}>Programming</button>
            <button onClick={() => filterHandler('Web Development')} className={`button ${activeCategory === 'Web Development' ? 'selected' : ''}`}>Web Development</button>
            <button onClick={() => filterHandler('Android Development')} className={`button ${activeCategory === 'Android Development' ? 'selected' : ''}`}>Android Development</button>
            <button onClick={() => filterHandler('Ethical Hacking')} className={`button ${activeCategory === 'Ethical Hacking' ? 'selected' : ''}`}>Ethical Hacking</button>
          </div>



          <div className="portfolioCards" data-aos="fade-up">
            {filteredData.map((currElem) => (
              <div className="cards" key={currElem.id} onClick={() => handleCardClick(currElem)}>
                <img className='portfolioImg' src={currElem.image} alt="" />
                <div className='heart'>
                  <p className='portfolioPara'>{currElem.category}</p>
                  <AiOutlineHeart />
                </div>
                <div className='protfolio_Title'>
                  <h2>{currElem.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPopUpVisible && (
        <PopUp data={selectedData} onClose={closePopUp} />
      )}
    </>
  );
}

export default PortfolioCard;
