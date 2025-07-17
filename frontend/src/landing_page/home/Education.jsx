import React from 'react';

export default function Education() {
  return (
    <div className="container my-4 my-md-5 p-3 pt-5">
      <div className="row d-flex flex-column-reverse flex-lg-row align-items-center"> {/* Added flex-column-reverse for order on small screens */}
        <div className="col-12 col-lg-5 text-center text-lg-start mt-4 mt-lg-0"> {/* Adjusted column and text alignment */}
          <img src="images/education.svg" alt="Education" className="img-fluid" style={{ "width": "90%" }} /> {/* Added img-fluid */}
        </div>
        {/* Removed the empty col-1 for better column flow */}
        <div className="col-12 col-lg-7"> {/* Adjusted column */}
          <h1 className="mb-3 mb-md-5 fs-3 fs-md-2">Free and open market education</h1>
          <p className="fs-6 fs-md-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" className="d-inline-block mt-2 fs-6">Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          <p className="mt-4 mt-md-5 fs-6 fs-md-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" className="d-inline-block mt-2 fs-6">TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  );
}