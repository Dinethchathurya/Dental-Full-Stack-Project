import React from "react";

const Header = () => {
  return (
    <>
      <header
        className="hero-section text-center text-white"
        style={{ backgroundImage: "url('Smile.png')" }}
      >
        <div className="container py-5">
          <div
            className="shadow p-5 bg-custom-blue rounded mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1>Welcome to Smile Dental</h1>
            <p>Providing exceptional dental care for all ages</p>
            <a href="" className="btn btn-primary btn-lg mt-3">
              Book Online
            </a>
            <p>
              or call <span className="fs-4">0777 38 65 90</span> for
              appointments
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
