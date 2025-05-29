import React from 'react'
import homeHero from '/public/images/homeHero.png'
import '/public/css/Home.css';
export default function Hero() {
  return (
    <div className="container p-5 mb-5" style={{"color":"#424242"}}>
      <div className='row d-flex justify-content-center'>
          <img src='images/homeHero.png' alt="Hero" className='my-5 col-md-7' />
          <h1 className=' text-center mt-4 title' >Invest in everything</h1>
          <p className='text-center my-3 subtitle'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className='mt-3 mb-5 btn fs-5 heroBtn '>Sign up for free</button>
      </div>
    </div>
  )
}

