import React from "react";

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
                <a
                  className="nav-link text-white"
                  href="#"
                  style={{ fontSize: "1.2rem" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#about"
                  style={{ fontSize: "1.2rem" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#services"
                  style={{ fontSize: "1.2rem" }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#prices"
                  style={{ fontSize: "1.2rem" }}
                >
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#ourteam"
                  style={{ fontSize: "1.2rem" }}
                >
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="#contact"
                  style={{ fontSize: "1.2rem" }}
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* Book Now Button */}
            <a href="#" className="btn btn-primary btn-lg ms-3">
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComponent;
