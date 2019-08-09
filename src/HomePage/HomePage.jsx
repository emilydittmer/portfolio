import React from 'react';
import './HomePage.scss';
import whiteLogo from "../images/whiteLogo.png";
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import resume from '../images/resume.svg';
import Header from '../Header/Header';
import myResume from '../images/Resume3.pdf'

const HomePage = () => {
  return (
    <section className='home-page'>
      <img className="logo" src={whiteLogo} alt="Emily Dittmer" />
      <Header />
      <footer className='all-links'>
        <a href="https://www.linkedin.com/in/emily-dittmer/" target="blank">
          <img className="link" src={linkedin} alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/emilydittmer/" target="blank">
          <img className="link" src={github} alt="Github Logo" />
        </a>
        <a href="mailto:emilyedittmer@gmail.com" target="blank">
          <img className="link" src={email} alt="Send an Email" />
        </a>
        <a href={myResume} target="blank" download>
          <img className="link" src={resume} alt="View my Resume" />
        </a>
      </footer>
    </section>
  )
}

export default HomePage;