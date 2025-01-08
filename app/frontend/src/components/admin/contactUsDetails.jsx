import React from "react";
import AddServiceModal from "./AddServiceModel";
import EditServiceModal from "./EditServiceModel";
import PriceListDropDown from "./priceListDropDown";
import DashboardButton from "./adminComponents/dashboardButton";
import DashboardSectionHedding from "./adminComponents/dashboardSectionHedding";

const ContactUsDetails = () => {
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
            <tbody>{/* <!-- Doctors--> */}</tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default ContactUsDetails;
