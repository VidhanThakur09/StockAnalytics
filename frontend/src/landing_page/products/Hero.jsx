import React from 'react'

export default function Hero() {
  return (
    <div className="container p-5 text-center border-bottom">
      <div className="row p-5">
        <h1 className='mt-5' style={{"fontWeight":"600", "fontSize":"2.75rem", "lineHeight":"1.2"}}>
         Zerodha Products
        </h1>
        <h3 style={{"fontSize":"1.25rem","fontWeight":"400","margin":"10px 0 15px 0"}}>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mb-5' style={{"fontSize":"1rem","lineHeight":"1.8","marginBottom":"15px"}}>Check out our <a style={{"textDecoration":"none"}} href="">investment offerings  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
      </div>
    </div>
  )
}

