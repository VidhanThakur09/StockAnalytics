import React from 'react'

export default function Team() {
  return (
    <div className="container ">
      <div className="row p-2 border-top">
        <h1 className=' text-center mt-5 '>
          People
        </h1>
      </div>
      <div className="row p-3 mt-2 text-muted">
        <div className="col-5 p-5 text-center">
          <img src="images/nithinKamath.jpg" alt="" style={{borderRadius:"100%",width:"85%"}}/>
          <h4 className='mt-5'>Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-7 p-5 mt-3">
          <p className='para'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p className='para'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p className='para'>Playing basketball is his zen.</p>
          <p className='para'>Connect on <a href="" className='links'>Homepage</a> / <a href="" className='links'>TradingQnA</a> / <a href="" className='links'>Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

