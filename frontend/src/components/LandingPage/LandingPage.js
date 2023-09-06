import React from 'react'
import Header from '../Header/Header';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className='landing-page-details'>
        <Header onPage="home"/>
      </div>
    </React.Fragment>
  )
}

export default LandingPage;