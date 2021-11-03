import React from 'react';
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/LandingPage/Footer'
import Banner from '../../components/LandingPage/Banner'
import Feature from '../../components/LandingPage/Feature'
import GoldCard from '../../components/LandingPage/GoldCard'

function Landing() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Feature/>
      <GoldCard/>
    </main>
    <Footer/>
    </>
  );
}

export default Landing;
