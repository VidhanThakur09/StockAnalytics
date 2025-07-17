import React from 'react';

export default function Pricing() {
  return (
    <div className="container my-4 my-md-5 p-3 pt-5">
      <div className="row d-flex flex-column-reverse flex-lg-row align-items-center"> {/* Added flex-column-reverse for order on small screens */}
        <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0"> {/* Adjusted column, text alignment, and margin */}
          <h1 className="mb-2 fs-3 fs-md-2">Unbeatable pricing</h1>
          <p className="fs-6 fs-md-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" className="text-decoration-none d-inline-block mt-2 fs-6">See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        {/* Removed the empty col-2 */}
        <div className="col-12 col-lg-8 mb-3 mb-md-5"> {/* Adjusted column */}
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border"> {/* Changed to col-12 col-sm-6 for stacking */}
              <h1 className="mb-3 fs-2 fs-md-1">₹ 0</h1>
              <p className="fs-6">Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 p-3 border"> {/* Changed to col-12 col-sm-6 for stacking */}
              <h1 className="mb-3 fs-2 fs-md-1">₹ 20</h1>
              <p className="fs-6">Flat fee for equity delivery <br /> and mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}