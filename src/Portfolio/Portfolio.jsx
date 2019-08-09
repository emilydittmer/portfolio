import React from "react";
import "./Portfolio.scss";
import Header from "../Header/Header";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <Header />
      <section className='projects'>
        <article className='what-next project-img'>
        </article>
        <article className='lightside project-img'>
        </article>
        <article className='movie-tracker project-img'>
        </article>
        <article className='overlook project-img'>
        </article>
      </section>
    </section>
  );
};

export default Portfolio;
