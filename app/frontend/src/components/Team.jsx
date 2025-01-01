import React from "react";

const Team = () => {
  return (
    <>
      <div className="bg-custom-blue">
        {/* <!-- Section Shading (Introduction Section) --> */}
        <div className="container shaded-section shadow-sm p-5">
          <div className="text-center">
            <p>
              At our smile dental surgery implants and teeth whitening centre,
              we take pride in having some of the most skilled and highly
              qualified dentists in Sri Lanka. Their expertise and commitment to
              providing the highest quality of care guarantees that each patient
              will receive exceptional and professional dental services.
              {/* <!-- <a href="#" className="text-decoration-none text-primary">Know more about Smile Dental</a> --> */}
            </p>
          </div>
        </div>

        <div className="container shaded-section shadow-sm p-3">
          <div className="row text-center text-custom-blue">
            {/* <!-- Profile 1 --> */}
            <div className="col-md-3 mb-4">
              <div className="profile-card">
                <img src="D1.jpg" alt="Dr Lahiru Rajakaruna" />
                <h5>Dr Lahiru Rajakaruna</h5>
                <p>
                  BDS (Peradeniya), MSc (Colombo), MD HI (Colombo), MAAID (USA)
                </p>
                <p>
                  <em>
                    {" "}
                    Director <br />
                    Smile Dental Hospitals
                  </em>
                </p>
                <p>Sri Lanka Medical Council Registration Number: 2698</p>
              </div>
            </div>
            {/* <!-- Profile 2 --> */}
            <div className="col-md-3 mb-4">
              <div className="profile-card">
                <img src="D2.jpg" alt="Dr Deepal Nanayakkara" />
                <h5>Dr Deepali Nanayakkara</h5>
                <p>BDS (Peradeniya), MD Ortho (Colombo), M Orth RCS (UK)</p>
                <p>
                  <em>Consultant Orthodontist</em>
                </p>
                <p>Sri Lanka Medical Council Registration Number: 2453</p>
              </div>
            </div>
            {/* <!-- Profile 3 --> */}
            <div className="col-md-3 mb-4">
              <div className="profile-card">
                <img src="D3.jpg" alt="Dr Malinda Senadhirathna" />
                <h5>Dr Malinda Senadhirathna</h5>
                <p>BDS (Peradeniya), MD OMFS (Colombo)</p>
                <p>
                  <em>Consultant OMF Surgeon (Acting.)</em>
                </p>
                <p>Sri Lanka Medical Council Registration Number: 2735</p>
              </div>
            </div>
            {/* <!-- Profile 4 --> */}
            <div className="col-md-3 mb-4">
              <div className="profile-card">
                <img src="D4.jpg" alt="Dr Dinali Gayasha" />
                <h5>Dr Dinali Gayasha</h5>
                <p>BDS (Peradeniya)</p>
                <p>
                  <em>Dental Surgeon</em>
                </p>
                <p>Sri Lanka Medical Council Registration Number: 2968</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
