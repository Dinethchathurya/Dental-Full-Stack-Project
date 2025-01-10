import React, { useState } from "react";
import AddServiceModal from "./AddServiceModel";
import EditServiceModal from "./EditServiceModel";
import DashboardButton from "./adminComponents/dashboardButton";
import DashboardSectionHedding from "./adminComponents/dashboardSectionHedding";

const PriceList = () => {
  return (
    <>
      <section id="price-list" className="shadow-box bg-custom-blue">
        <div className="mt-4">          
          <DashboardSectionHedding 
            hedding ={"Price List"}
          />

          <DashboardButton
            buttonName={"Add New Service"}
            target={"#addServiceModal"}
          />
          <AddServiceModal />

          <table className="table table-striped " id="doctorTable">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* {contactUsDetails.map((ContactDetail) => {
                return (
                  <DashboardTableRow
                    key={ContactDetail._id}
                    name={ContactDetail.name}
                    email={ContactDetail.email}
                    msg={ContactDetail.message}
                  />
                );
              })} */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PriceList;
