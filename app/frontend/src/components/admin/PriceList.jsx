import React, { useState } from "react";
import AddServiceModal from "./AddServiceModel";
import EditServiceModal from "./EditServiceModel";
import PriceListDropDown from "./priceListDropDown";
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

          <PriceListDropDown />

          <DashboardButton
            buttonName={"Show Services"}
            target={"#editServiceModal"}
          />

          {/* <!-- Add Service Modal --> */}
          <AddServiceModal />

          {/* <!-- Edit Service Modal --> */}
          <EditServiceModal />
        </div>
      </section>
    </>
  );
};

export default PriceList;
