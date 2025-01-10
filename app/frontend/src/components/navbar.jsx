import React from "react";
import { Link } from "react-router";
import { HashLink } from 'react-router-hash-link';

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark-navy shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="Icon.png"
              alt="Logo"
              className="navbar-brand img me-2 align-items-left"
            />
          </a>
          <button
            className="navbar-toggler bg-custom-blue"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" style={{ fontSize: "1.2rem" }} >Home</Link>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-white"
                  to="/#about"
                  style={{ fontSize: "1.2rem" }}
                >
                  About Us
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-white"
                  to="/#services"
                  style={{ fontSize: "1.2rem" }}
                >
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/price"
                  style={{ fontSize: "1.2rem" }}
                >
                  Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/ourteam"
                  style={{ fontSize: "1.2rem" }}
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link text-white"
                  to="/#contact"
                  style={{ fontSize: "1.2rem" }}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
            {/* Book Now Button */}
            <Link to="/booking" className="btn btn-primary btn-lg ms-3" >Book Now</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComponent;
