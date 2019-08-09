import React from "react";
import "./HomePage.scss";
import whiteLogo from "../images/whiteLogo.png";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import email from "../images/email.svg";
import resume from "../images/resume.svg";
import Header from "../Header/Header";
import myResume from "../images/Resume3.pdf";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header />
      <article className='home-page-info'>
        <img className="logo" src={whiteLogo} alt="Emily Dittmer" />
        <div className="all-links">
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
        </div>
      </article>
    </section>
  );
};

export default HomePage;
