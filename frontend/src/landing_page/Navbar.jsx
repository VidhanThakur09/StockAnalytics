import React from "react";
import '/public/css/Navbar.css';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg border"
        style={{ backgroundColor: "white" }}
      >
        <div className="container px-3">
          <Link className="navbar-brand " to="/">
            <img src="images/logo.png" style={{ width: "25%",display:"inline-block" }} alt="logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none ms-auto"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-5">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
