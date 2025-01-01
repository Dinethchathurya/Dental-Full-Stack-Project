import React from "react";

const Footer = () => {
    return (
        <>
              <footer className="bg-dark-navy text-white py-4 shadow-sm">
    <div className="container">
      <div className="d-flex justify-content-center mb-3">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-4"><a className="nav-link text-white fs-5" href="#">Home</a></li>
          <li className="nav-item me-4"><a className="nav-link text-white fs-5" href="#about">About Us</a></li>
          <li className="nav-item me-4"><a className="nav-link text-white fs-5" href="#services">Services</a></li>
          <li className="nav-item me-4"><a className="nav-link text-white fs-5" href="#prices">Prices</a></li>
          <li className="nav-item me-4"><a className="nav-link text-white fs-5" href="#ourteam">Our Team</a></li>
          <li className="nav-item"><a className="nav-link text-white fs-5" href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <a href="https://www.facebook.com" className="me-3">
          <img src="fb.png" alt="Facebook" style=  {{ width: "30px " , height: "30px" }}/>
        </a>
        <a href="https://www.youtube.com" className="me-3">
          <img src="yt.png" alt="YouTube" style= {{ width: "30px" , height: "30px" }}/>
        </a>
        <a href="https://www.instagram.com" className="me-3">
          <img src="instra.png" alt="Instagram" style= {{ width: "30px" , height: "30px" }}/>
        </a>
      </div>
      <div className="text-center">
        <p className="mb-1">© 2024 Smile Dental | All Rights Reserved</p>
        <p className="mb-0">Call <span className="fs-4">0777 38 65 90</span> for appointments</p>
      </div>
    </div>
  </footer>
        </>
    );
};
export default Footer;