import React from 'react';

export default function Awards() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row d-flex align-items-center"> {/* Added align-items-center for vertical alignment */}
        <div className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start"> {/* Adjusted padding and text alignment */}
          <img src="images/largestBroker.svg" alt="awards" className="img-fluid" /> {/* Added img-fluid */}
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-5"> {/* Adjusted padding */}
          <h1 className="fs-3 fs-md-2 fs-lg-1">Largest stock broker in India</h1>
          <p className="mt-3 mt-md-5 fs-6 fs-md-5">2+ million Stoxight clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div>
            <div className="row">
              <div className="col-12 col-sm-6"> {/* Changed to col-12 col-sm-6 for stacked on small, side-by-side on sm+ */}
                <ul>
                  <li><p className="fs-6">Futures and Options</p></li>
                  <li><p className="fs-6">Stocks & IPOs</p></li>
                  <li><p className="fs-6">Commodity derivatives</p></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6"> {/* Changed to col-12 col-sm-6 */}
                <ul>
                  <li><p className="fs-6">Direct mutual funds</p></li>
                  <li><p className="fs-6">Currency derivatives</p></li>
                  <li><p className="fs-6">Bonds and Govt. Securities</p></li>
                </ul>
              </div>
              <div className="col-12"> {/* Ensuring pressLogos takes full width */}
                <img src="images/pressLogos.png" alt="press" className="img-fluid mt-3" /> {/* Added img-fluid and margin-top */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}