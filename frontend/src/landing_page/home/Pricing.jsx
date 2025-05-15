import React from 'react'

export default function Pricing() {
  return (
    <div className='container my-5 p-3 pt-5'>
      <div className="row">
        <div className="col-4">
          <h1 className='mb-2' style={{"fontSize":"2rem"}}>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{"textDecoration":"none"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-2 border">
              <h1 className='mb-3'>₹ 0</h1>
              <p>Free equity delivery <br></br>and direct mutual funds</p>
            </div>
            <div className="col p-2 border">
              <h1 className='mb-3'>₹ 20</h1>
              <p>Flat fee for equity delivery <br></br> and mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}