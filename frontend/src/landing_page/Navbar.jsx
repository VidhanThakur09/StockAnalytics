import React from "react";
import '/public/css/Navbar.css';
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg border"
        style={{ backgroundColor: "white" }}
      >
        <div className="container px-3">
          <a className="navbar-brand " href="#">
            <img src="images/logo.svg" style={{ width: "25%" }} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Support
                  </a>
                </li>
                <i className="fa fa-bars burger" aria-hidden="true"></i>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
