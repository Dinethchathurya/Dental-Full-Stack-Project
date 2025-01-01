// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark-navy shadow-sm">
//     <div className="container">
//       <a className="navbar-brand d-flex align-items-center" href="#">
//         <img src="Images/Icon.png" alt="Logo" className="navbar-brand img me-2 align-items-left"/>
//       </a>
//       <button className="navbar-toggler bg-custom-blue" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#" style="font-size: 1.2rem;">Home</a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#about" style="font-size: 1.2rem;">About Us</a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#services" style="font-size: 1.2rem;">Services</a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#prices" style="font-size: 1.2rem;">Prices</a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#ourteam" style="font-size: 1.2rem;">Our Team</a> */}
//           </li>
//           <li className="nav-item">
//             {/* <a className="nav-link text-white" href="#contact" style="font-size: 1.2rem;">Contact</a> */}
//           </li>
//         </ul>
//         {/* <!-- Book Now Button --> */}
//         {/* <a href="#" className="btn btn-primary btn-lg ms-3">Book Now</a> */}
//       </div>
//     </div>
//   </nav>
//     </>
//   )
// }

// export default App

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark-navy shadow-sm">
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
              or call <span className="fs-4">0777 38 65 90</span> for appointments
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
