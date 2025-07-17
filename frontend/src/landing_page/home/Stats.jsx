import React from 'react';

export default function Stats() {
  return (
    <div className="container p-3 my-4 my-md-5" style={{ "marginTop": "5vh" }}> {/* Adjusted margin-top and padding */}
      <div className="row d-flex flex-column-reverse flex-lg-row align-items-center"> {/* Added flex-column-reverse for order on small screens */}
        <div className="col-12 col-lg-5 pr-lg-5 text-center text-lg-start"> {/* Adjusted padding for larger screens and text alignment */}
          <h1 className="mb-3 mb-md-5 fs-3 fs-md-2">Trust with confidence</h1>

          <h2 className="fs-4 fs-md-3 mt-4">Customer-first always</h2>
          <p className="fs-6 text-muted">That's why 1.6+ crore customers trust Stoxight with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h2 className="fs-4 fs-md-3 mt-4">No spam or gimmicks</h2>
          <p className="fs-6 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

          <h2 className="fs-4 fs-md-3 mt-4">The Stoxight universe</h2>
          <p className="fs-6 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2 className="fs-4 fs-md-3 mt-4">Do better with money</h2>
          <p className="fs-6 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-12 col-lg-7 text-center mt-4 mt-lg-0"> {/* Adjusted margin-top for small screens */}
          <img className="img-fluid mb-4" src="images/ecosystem.png" alt="ecosystem" style={{ "width": "90%" }} /> {/* Added img-fluid and margin-bottom */}
          <div className="d-flex flex-column flex-sm-row justify-content-center"> {/* Use flexbox for links and stack on small screens */}
            <a style={{ "textDecoration": "none" }} href="" className="mx-2 my-2 fs-6">Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a style={{ "textDecoration": "none" }} href="" className="mx-2 my-2 fs-6">Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
          </div>
        </div>
      </div>
    </div>
  );
}