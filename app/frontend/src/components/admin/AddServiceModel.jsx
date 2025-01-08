import React from "react";
import AddDoctorModal from "./AddDoctorModal";

const AddServiceModal = () => {
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
                  <form id="addServiceForm">
                    <div className="mb-3">
                      <label
                        htmlFor="serviceName" 
                        className="form-label text-custom-blue"
                      >
                        Service Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="serviceName"
                        placeholder="Enter Service Name"
                        required
                      />
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
                        className="form-control"
                        id="servicePrice"
                        placeholder="Enter Service Price"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add Service
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
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