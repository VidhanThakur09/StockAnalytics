import React from 'react'

export default function Awards() {
  return (
    <div className="container my-5 ">
      <div className="row  ">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="images/largestBroker.svg" alt="awards"/>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 >Largest stock broker in India</h1>
          <p className='mt-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div>
            <div className="row">
              <div className="col">
                <ul>
                  <li><p>Futures and Options</p></li>
                  <li><p>Stocks & IPOs</p></li>
                  <li><p>Commodity derivatives</p></li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li><p>Direct mutual funds</p></li>
                  <li><p>Currency derivatives</p></li>
                  <li><p>Bonds and Govt. Securities</p></li>
                </ul>
              </div>
              <img src="images/pressLogos.png" alt="press" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
