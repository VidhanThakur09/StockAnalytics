import React from 'react'

export default function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Stoxight Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img  style={{"width":"50%" , "marginBottom":"10px"}} src="images/zerodhaFundhouse.png" className="img-fluid"/>
          <p className="text-small text-muted">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img  style={{"width":"50%", "marginBottom":"10px"}} src="images/sensibullLogo.svg" className="img-fluid"/>
          <p className="text-small text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img  style={{"width":"50%", "marginBottom":"10px"}} src="images/tijori.svg" className="img-fluid"/>
          <p className="text-small text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more. </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img style={{"width":"50%", "marginBottom":"10px"}} src="images/streakLogo.png" className="img-fluid"/>
          <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img style={{"width":"50%", "marginBottom":"10px"}} src="images/smallcaseLogo.png" className="img-fluid"/>
          <p className="text-small text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-3"> {/* Responsive columns */}
          <img  style={{"width":"50%", "marginBottom":"10px"}} src="images/dittoLogo.png" className="img-fluid"/>
          <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-6 fs-sm-5  mb-5 w-25 w-sm-30 w-md-25 mx-auto" // Responsive width and centering
        >
          Signup Now
        </button>
      </div>
    </div>
  )
}