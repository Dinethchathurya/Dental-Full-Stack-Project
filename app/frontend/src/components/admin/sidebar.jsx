import React from "react";
import { Link } from "react-router-dom";
import { BsHouse, BsCalendarCheck, BsPeople, BsListUl, BsBoxArrowRight } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar p-3 bg-dark-navy">
      <h4 className="text-center">Admin Dashboard</h4>
      <Link to="#" className="d-block">
        <BsHouse /> Dashboard
      </Link>
      <Link to="#Appointments" className="d-block">
        <BsCalendarCheck /> Appointment
      </Link>
      <Link to="#Team" className="d-block">
        <BsPeople /> Team
      </Link>
      <Link to="#price-list" className="d-block">
        <BsListUl /> Price List
      </Link>
      <Link to="#logout" className="d-block">
        <BsBoxArrowRight /> Logout
      </Link>
    </div>
  );
};

export default Sidebar;
