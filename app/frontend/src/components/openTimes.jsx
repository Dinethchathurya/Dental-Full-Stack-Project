import React from "react";

const OpenTimes = () => {
    return (
        <>
             <div className="col-lg-5">
          <div className="card custom-card">
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  src="Icon.png"
                  alt="Clinic Logo"
                  style={{ width: "50px" }}
                />
                <h4 className="mt-2 fs-4">Smile Dental</h4>
              </div>
              {/* Open Times */}
              <p className="text-green text-center">
                <b>Open Times</b>
              </p>
              <table className="table table-sm">
                <tbody className="p-5 mb-4 text-center text-custom-blue">
                  <tr>
                    <td>Monday</td>
                    <td>4:30 PM - 10 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>4:30 PM - 10 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>4:30 PM - 10 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>4:30 PM - 10 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>4:30 PM - 10 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>8:30 AM - 3 PM</td>
                  </tr>
                  <tr>
                    <td>Holidays</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center">324-10 Havelock Rd, Colombo 00500</p>
              {/* Contact */}
              <h6 className="mb-0 text-center">Contact Us</h6>
              <p className="mb-0 text-center">
                Call 0777 38 65 90 for appointments
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.facebook.com" className="me-3">
                <img
                  src="fb.png"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="https://www.youtube.com" className="me-3">
                <img
                  src="yt.png"
                  alt="YouTube"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="https://www.instagram.com" className="me-3">
                <img
                  src="instra.png"
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
        </>
    );
};
export default OpenTimes;