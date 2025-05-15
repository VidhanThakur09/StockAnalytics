import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Navbar from '../Navbar';
import Prices from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import '/public/css/Home.css';
export default function HeroPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Prices/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </>
  )
}
