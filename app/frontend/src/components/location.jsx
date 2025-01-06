import React from "react";

const Location = () => {
  return (
    <>
      <section id="location" className="py-5">
        <h2 className="text-center mb-4 text-custom-blue">Our Location</h2>
        <p className="text-center mb-4 text-custom-blue">324-10 Havelock Rd, Colombo 00500</p>
        <div className="container d-flex justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0656709672444!2d79.86579387584283!3d6.882736793116215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b21c4ad9c7f%3A0x2db603e21bdfd4f9!2sHavelock%20City%20Mall!5e0!3m2!1sen!2slk!4v1735566678935!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: "0", alignItems: "center" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Location;
