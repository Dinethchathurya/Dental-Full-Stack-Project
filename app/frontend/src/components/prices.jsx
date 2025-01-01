import React from "react";

const Prices = () => {
  return (
    <>
      <section id="prices" className="py-5 --bs-primary">
        <div className="container">
          <h2 className="text-center mb-4">Our Prices</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col" className="service-column ">
                    <b>Services</b>
                  </th>
                  <th scope="col" className="price-column">
                    <b>Prices</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="service-column">
                    Appointment Charges/ Channeling Fee
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Service Charges, Taxes & VAT
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Examination and Consultation
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Digital Dental X-rays (In house)
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    {" "}
                    Teeth Whitening – Examination Visit
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Teeth Whitening – Starter Package
                    <p>(Professional Whitening at the Clinic)</p>
                  </td>
                  <td className="price-column">Rs 35,000/-</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Teeth Whitening – Regular Package
                    <p>
                      (Professional Whitening at the Clinic + Home whitening
                      pack + Full mouth Scaling and polishing)
                    </p>
                  </td>
                  <td className="price-column">Rs 60,000/-</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Teeth Whitening – Hollywood Package
                    <p>
                      (Professional Whitening at the Clinic + Home whitening
                      pack + Full mouth Scaling and polishing + Hollywood
                      Whitening Shield )
                    </p>
                  </td>
                  <td className="price-column">Rs 85,000/-</td>
                </tr>

                <tr>
                  <td className="service-column">
                    {" "}
                    Dental Implant Consultation
                  </td>
                  <td className="price-column">Free</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Dental Implant (Mini/Hybrid) – with Porcelain Crown
                  </td>
                  <td className="price-column">Rs 100,000/-</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Dental Implant – with Porcelain Crown
                  </td>
                  <td className="price-column">Rs 150,000/-</td>
                </tr>
                <tr>
                  <td className="service-column">Braces – One Arch</td>
                  <td className="price-column">
                    Rs 130,000/-
                    <p>(Payment plan as mentioned below)</p>
                  </td>
                </tr>
                <tr>
                  <td className="service-column">Braces – Both Arches</td>
                  <td className="price-column">
                    Rs 250,000/-
                    <p>(Payment plan as mentioned below)</p>
                  </td>
                </tr>
                <tr>
                  <td className="service-column">
                    Payment Plan – 1st Visit for Braces
                  </td>
                  <td className="price-column">Rs 10,000/-</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Payment Plan – 2nd Visit for Braces – Bond Up
                  </td>
                  <td className="price-column">50% of the total</td>
                </tr>
                <tr>
                  <td className="service-column">
                    Payment Plan – 3rd & Any Other Visit – Adjustment
                  </td>
                  <td className="price-column">
                    Rs 5,000/-
                    <p>(Deducted from total)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Prices;
