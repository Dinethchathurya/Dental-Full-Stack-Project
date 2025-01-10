import React from "react";
import Sidebar from "../components/admin/sidebar.jsx"
import Navbar from "../components/navbar.jsx";
import Appointments from "../components/admin/Appointments.jsx";
import AddDoctorModal from "../components/admin/AddDoctorModal.jsx";
import PriceList from "../components/admin/PriceList.jsx";
import { Helmet } from 'react-helmet-async';
import ContactUsDetails from "../components/admin/contactUsDetails.jsx";
import AddAvailableDateModal from "../components/admin/AddAvailableDates.jsx";



const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashbord</title>
        <meta name="description" content="This is the Admin Dashbord" />
      </Helmet>

      <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Appointments />
        <AddAvailableDateModal />
        <AddDoctorModal />
        <PriceList />
        <ContactUsDetails />

      </div>
    </div>
    </>
  
  );
};

export default AdminDashboard;
