import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import FeaturedListings from '../FeaturedListings/FeaturedListings';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className='landing-page-details'>

        {/* Header component*/}
        <Header onPage="home" />

        {/* HeroSection component*/}
        <HeroSection />

        {/* FeaturedListings component*/}
        <FeaturedListings />

      </div>
    </React.Fragment>
  )
}

export default LandingPage;