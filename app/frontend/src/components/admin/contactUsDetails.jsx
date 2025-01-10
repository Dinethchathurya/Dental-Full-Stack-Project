import React, { useEffect, useState } from "react";
import DashboardSectionHedding from "./adminComponents/dashboardSectionHedding";
import axios from "axios";
import DashboardTableRow from "./adminComponents/dashboardTableRow";

const ContactUsDetails = () => {
  const [contactUsDetails, setContactUsDetails] = useState([]);

  async function fetchContactUsDetails() {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/admin/getcontactus"
      );
      if (response.data) {
        setContactUsDetails(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContactUsDetails();
  }, []);

  return (
    <>
      <section id="price-list" className="shadow-box bg-custom-blue">
        <div className="mt-4">
          <DashboardSectionHedding hedding={"Contact Us"} />
          <table className="table table-striped " id="doctorTable">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactUsDetails.map((ContactDetail) => {
                return (
                  <DashboardTableRow
                    key={ContactDetail._id}
                    name={ContactDetail.name}
                    email={ContactDetail.email}
                    msg={ContactDetail.message}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default ContactUsDetails;
