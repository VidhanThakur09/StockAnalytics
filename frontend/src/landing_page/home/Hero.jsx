import React from 'react';
import homeHero from '/public/images/homeHero.png';
import { Link } from 'react-router-dom';
import '/public/css/Home.css';

export default function Hero() {
  return (
    <div className="container p-3 p-sm-5 mb-3 mb-sm-5" style={{ "color": "#424242" }}>
      <div className="row d-flex justify-content-center">
        {/* Adjusted column classes for better responsiveness */}
        <img src="images/homeHero.png" alt="Hero" className="img-fluid my-3 my-md-5 col-12 col-md-9 col-lg-7" />
        <h1 className="text-center mt-3 mt-sm-4 title fs-3 fs-md-2 fs-lg-1">Invest in everything with AI Analytics</h1>
        <p className="text-center my-3 subtitle fs-6 fs-md-5">Make smarter investment decisions with our cutting-edge AI technology. Get real-time stock analysis, market predictions, and personalized insights.</p>
        <Link to="/signup" className="mt-3 mb-4 mb-sm-5 btn fs-6 fs-sm-5 heroBtn heroLink text-decoration-none col-auto">  Sign up for free</Link>
      </div>
    </div>
  );
}