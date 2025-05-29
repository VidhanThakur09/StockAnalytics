import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';

import Prices from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';

import '/public/css/Home.css';
export default function HeroPage() {
  return (
    <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Prices/>
        <Education/>
        <OpenAccount/>
    </>
  )
}
