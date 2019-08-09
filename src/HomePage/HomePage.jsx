import React from 'react';
import './HomePage.scss';
import whiteLogo from "../images/whiteLogo.png";
import Header from '../Header/Header'

const HomePage = () => {
  return (
    <section className='home-page'>
      <img className="logo" src={whiteLogo} alt="Emily Dittmer" />
        <Header />
    </section>
  )
}

export default HomePage;