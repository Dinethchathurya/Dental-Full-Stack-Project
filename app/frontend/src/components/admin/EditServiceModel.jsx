import React from "react";

const EditServiceModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="editServiceModal"
        tabIndex="-1"
        aria-labelledby="editServiceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-custom-blue"
                id="editServiceModalLabel"
              >
                Edit Service
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="editServiceForm">
                <div className="mb-3">
                  <label
                    htmlFor="editServiceName"
                    className="form-label text-custom-blue"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editServiceName"
                    placeholder="Enter Service Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="editServicePrice"
                    className="form-label text-custom-blue"
                  >
                    Service Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editServicePrice"
                    placeholder="Enter Service Price"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update Service
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="deleteServiceBtn"
                >
                  Delete Service
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
export default EditServiceModal;
