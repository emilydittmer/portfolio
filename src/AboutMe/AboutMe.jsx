import React from "react";
import "./AboutMe.scss";
import Header from "../Header/Header";
import blackLogo from "../images/blackLogo.png";
import headshot from '../images/headshot.png'

const AboutMe = () => {
  return (
    <>
      <section className="about-me">
        <section className="left-half">
          <Header />
          <div className='img-location'>
            <img src={headshot} alt='Emily Dittmer headshot' className='headshot'/>
          </div>
        </section>
        <section className="right-half">
          <img className="about-me-logo" src={blackLogo} alt="Emily Dittmer" />
          <article className="about-me-section">
            <h3>A little about me...</h3>
            <p className="about-me-info">
              After a career at IBM, I am bringing my skills in communication
              and customer support to a career in software development. While
              working with Watson at IBM, I developed a deep curiosity for how
              the software I supported daily operated on a fundamental level.
              This curiosity has long been the driving factor to develop new
              skills and continuously learn.
            </p>
          </article>
          <article className='my-skills'>
            <h3>My Skills</h3>
            <article className='all-skills'>
              <div className='skills-sec'>
                <h4>Languages/Frameworks</h4>
                <ul className="skills-list">
                  <li>React</li>
                  <li>Redux</li>
                  <li>JavaScript</li>
                  <li>React Router</li>
                  <li>Enzyme/Jest</li>
                  <li>Mocha/Chai</li>
                  <li>jQuery</li>
                  <li>CSS/SASS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className='skills-sec'>
                <h4>Systems/Practices</h4>
                <ul className="skills-list">
                  <li>Git/Github</li>
                  <li>Object Oriented Programming (OOP)</li>
                  <li>Test Driven Development (TDD)</li>
                  <li>Agile Practices</li>
                </ul>
              </div>
            </article>
          </article>
        </section>
      </section>
    </>
  );
};

export default AboutMe;
