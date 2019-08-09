import React from 'react';
import './Error.scss';
import Header from '../Header/Header'

const Error = () => {
  return (
    <section className='error-page'>
      <Header />
      <h3 className='error-message'>404 Page Not Found.</h3>
    </section>
  )
}

export default Error