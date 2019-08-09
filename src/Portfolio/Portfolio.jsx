import React from "react";
import "./Portfolio.scss";
import Header from "../Header/Header";
import whatNext from '../images/what-next.png';
import lightside from '../images/lightside.png';
import movieTracker from '../images/movie-tracker.png';
import overlook from '../images/overlook.png';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header />
      <section className="projects">
        <article className='project'>
        <a
            href="https://github.com/emilydittmer/what-next"
            target="blank"
          >
          <img src={whatNext} alt="Screenshot of What Next? Homepage" className='project-img'/>
          <div className="project-info top">
              <div className='text'>
                <h3 className='project-title'>What's Next?</h3>
                <p className='description'>
                  This app allows a user to enter in a recently completed TV
                  show and find suggestions on what to watch next based on that
                  show. The user can then add any show to their watchlist. Once
                  a show is added to the watchlist, they will be able to view
                  all selected shows and remove any show from the list.
                </p>
                <h4>Technologies Used</h4>
                <p>- React - Redux - Router - Jest & Enzyme - API fetches - JavaScript - SCSS - HTML</p>
              </div>
            </div>
            </a>
        </article>
        <article className='project'>
        <a
            href="https://github.com/emilydittmer/lightside"
            target="blank"
          >
          <img src={lightside} alt="Screenshot of Lightside Homepage" className='project-img'/>
          <div className="project-info top">
              <div className='text'>
                <h3 className='project-title'>Lightside</h3>
                <p className='description'>
                Light Side is a paired project created using React and Router to display components from the Star Wars API. On the loading page of the app, it randomized the opening crawl displayed in all the films and then allowed the user to view people, planets, vehicles or favorites.
                </p>
                <h4>Technologies Used</h4>
                <p>- React - Router - Jest & Enzyme - API fetches - JavaScript - SCSS - HTML</p>
              </div>
            </div>
            </a>
        </article>
        <article className='project'>
        <a
            href="https://github.com/emilydittmer/movie-tracker"
            target="blank"
          >
          <img src={movieTracker} alt="Screenshot of MovieTracker Homepage" className='project-img'/>
          <div className="project-info bottom">
              <div className='text'>
                <h3 className='project-title'>Movie Tracker</h3>
                <p className='description'>
                Movie Tracker is an app using movie API to display currently playing movies. On the loading page of the app, it displays a list of currently playing films and allows the user to either sign in or create a new account. Once logged in, the user then has the ability to add and remove favorites and then view their favorites.
                </p>
                <h4>Technologies Used</h4>
                <p>- React - Redux - Router - Jest & Enzyme - API fetches - JavaScript - SCSS - HTML</p>
              </div>
            </div>
            </a>
        </article>
        <article className='project'>
        <a
            href="https://github.com/emilydittmer/overlook"
            target="blank"
          >
          <img src={overlook} alt="Screenshot of Overlook Room Service Page" className='project-img'/>
          <div className="project-info bottom">
              <div className='text'>
                <h3 className='project-title'>Overlook</h3>
                <p className='description'>
                Overlook is a solo project that is described as a hotel management app. It is to be used by hotel staff to manage activities like customer details, booking details for different types of rooms, unbooking rooms, and calculating/showing a customer’s total bill.
                </p>
                <h4>Technologies Used</h4>
                <p>- OOP (Object Oriented Programming) - TDD (Test Driven Development) - SCSS - jQuery - Mocha/Chai</p>
              </div>
            </div>
            </a>
        </article>
      </section>
    </section>
  );
};

export default Portfolio;
