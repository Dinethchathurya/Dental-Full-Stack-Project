import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="d-flex justify-content-center text-custom-blue p-5"
        style={{ minHeight: "60vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 shadow p-5">
              <h2 className="mb-3">About Our Clinic</h2>
              <p className="mb-4">
                At Dental Clinic, we always try our best to explain your
                treatment options and all the costs clearly. Our goal is to make
                sure every patient feels confident, well-informed, and actively
                part of their treatment plan.
              </p>
              <p className="mb-4">
                We provide top-notch dental services with state-of-the-art
                technology to ensure your smile stays beautiful and healthy.
              </p>
              <div className="row">
                <ul className="text-start ps-3 col-md-6">
                  <li className="mb-2">Experienced Dentists</li>
                  <li className="mb-2">Modern Equipment</li>
                  <li className="mb-2">Personalized Care</li>
                </ul>
                <ul className="text-start ps-3 col-md-6">
                  <li className="mb-2">Comfortable Environment</li>
                  <li className="mb-2">Emergency Dental Services</li>
                  <li className="mb-2">Flexible Payment Plans</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="aboutus.jpg"
                alt="Dental Clinic"
                className="img-fluid rounded"
                style={{ height: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
