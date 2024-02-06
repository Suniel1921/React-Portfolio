import React, { useState } from 'react';
import '../App.css';
import PortfolioData from '../components/PortfolioData';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {

    const [data, setData] = useState(PortfolioData);

  return (
    <>
       <PortfolioCard data={data}/>        
    </>
  )
}

export default Portfolio