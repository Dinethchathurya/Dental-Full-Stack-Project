import React from "react";

const DashboardButton = (props) => {
  return (
    <>
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target={props.target}
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default DashboardButton;
