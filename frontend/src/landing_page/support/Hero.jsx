import React from 'react'

export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="mt-4 mt-md-5" id="supportWrapper">
        <h4 className="fs-5 fs-md-4">Support Portal</h4>
        <a href="" className="text-decoration-none">Track Tickets</a>
      </div>
      <div className="row p-3 p-md-5 m-1 m-md-3 align-items-center">
        <div className="col-12 col-lg-6 p-3">
          <h1 className="fs-4 mb-4 mb-md-5 text-center text-lg-start">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            className="form-control w-100 mb-3"
          />
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
            <a href="" className='me-4 mb-2 mb-md-0 text-decoration-none' id='superLinks'>Track account opening</a>
            <a href="" className='me-4 mb-2 mb-md-0 text-decoration-none' id='superLinks'>Track segment activation</a>
            <a href="" className='me-4 mb-2 mb-md-0 text-decoration-none' id='superLinks'>Intraday margins</a>
            <a href="" className='me-4 mb-2 mb-md-0 text-decoration-none' id='superLinks'>Kite user manual</a>
          </div>
        </div>
        <div className="col-lg-1 d-none d-lg-block"></div> {/* Hidden on small/medium, block on large */}
        <div className="col-12 col-lg-5 p-3 ps-lg-5 mt-4 mt-lg-0">
          <h1 className="fs-4 fs-md-3 text-center text-lg-start">Featured</h1>
          <ol className="ps-3 ps-md-4">
            <li className="mb-2">
              <a href="" style={{lineHeight: "1.5"}} className="text-decoration-none d-block">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="text-decoration-none d-block">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}