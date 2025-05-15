import React from 'react'

export default function Education() {
  return (
    <div className='container my-5 p-3 pt-5'>
      <div className="row">
        
        
        <div className="col-5">
          <img src="images/education.svg" alt="" style={{"width": "90%"}}  />
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <h1 className='mb-5' style={{"fontSize":"2rem"}}>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="">Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="">TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

