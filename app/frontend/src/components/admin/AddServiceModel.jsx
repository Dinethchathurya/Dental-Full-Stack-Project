import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const AddServiceModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post("http://localhost:9000/api/admin/addservice", data);
      if (response.data) {
        alert(response.data);
        reset();
        props.func();
      }
      
    } catch (error) {
      console.log(error);
      alert("something wrong");
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="addServiceModal"
        tabIndex="-1"
        aria-labelledby="addServiceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-custom-blue"
                id="addServiceModalLabel"
              >
                Add New Service
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)} id="addServiceForm">
                <div className="mb-3">
                  <label
                    htmlFor="serviceName"
                    className="form-label text-custom-blue"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.serviceName ? "is-invalid" : ""
                    }`}
                    id="serviceName"
                    placeholder="Enter Service Name"
                    {...register("serviceName", {
                      required: "Service name is required",
                      minLength: {
                        value: 3,
                        message: "Service name must be at least 3 characters long",
                      },
                    })}
                  />
                  {errors.serviceName && (
                    <div className="invalid-feedback">
                      {errors.serviceName.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="servicePrice"
                    className="form-label text-custom-blue"
                  >
                    Service Price
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.servicePrice ? "is-invalid" : ""
                    }`}
                    id="servicePrice"
                    placeholder="Enter Service Price"
                    {...register("servicePrice", {
                      required: "Service price is required",
                      pattern: {
                        value: /^[0-9]+(\.[0-9]{1,2})?$/, 
                        message: "Invalid price format",
                      },
                    })}
                  />
                  {errors.servicePrice && (
                    <div className="invalid-feedback">
                      {errors.servicePrice.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Service
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => reset()} 
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddServiceModal;
