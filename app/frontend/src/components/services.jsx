import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" className="py-5">
        <div className="text-center mb-5">
          <h2 className="text-custom-blue">Our Services</h2>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 text-center service-card">
              <div className="p-4 rounded shadow-sm bg-custom-blue h-100">
                <img
                  src="whitening.webp"
                  alt="Service 1"
                  className="mb-3 w-50"
                />
                <h5>Teeth Whitening</h5>
                <p>
                  Brighten your smile with our professional teeth whitening
                  services. Our teeth whitening treatments use advanced
                  materials and technology to make it easier than ever to get a
                  brighter smile.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center service-card">
              <div className="p-4 rounded shadow-sm bg-custom-blue h-100">
                <img
                  src="implants.webp"
                  alt="Service 2"
                  className="mb-3 w-50"
                />
                <h5>Dental Implants</h5>
                <p>
                  Restore your smile with durable and natural-looking dental
                  implants. Support one or more artificial teeth with a dental
                  implant. The titanium screw replaces a failed tooth root
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center service-card">
              <div className="p-4 rounded shadow-sm bg-custom-blue h-100">
                <img
                  src="braces & Invisalign.webp"
                  alt="Service 3"
                  className="mb-3 w-50"
                />
                <h5>Braces & Invisalign</h5>
                <p>
                  <b>Braces</b> are tools that fix crooked teeth or bite
                  problems by using metal parts, wires, and bands.
                  <b>Invisalign</b> is a clear aligner system that straightens
                  teeth discreetly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
