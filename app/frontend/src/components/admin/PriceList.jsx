import React, { useState } from "react";

const PriceList = () => {
  const [services, setServices] = useState([
    { name: "Appointment Charges/ Channeling Fee", price: "Free" },
    { name: "Service Charges, Taxes & VAT", price: "Free" },
    { name: "Examination and Consultation", price: "Free" },
    { name: "Teeth Whitening – Examination Visit", price: "Free" },
    { name: "Teeth Whitening – Starter Package", price: "Rs 35,000/-" },
    { name: "Teeth Whitening – Regular Package", price: "Rs 60,000/-" },
    { name: "Teeth Whitening – Hollywood Package", price: "Rs 85,000/-" },
    { name: "Dental Implant Consultation", price: "Free" },
    {
      name: "Dental Implant (Mini/Hybrid) – with Porcelain Crown",
      price: "Rs 100,000/-",
    },
    { name: "Dental Implant – with Porcelain Crown", price: "Rs 150,000/-" },
    { name: "Braces – One Arch", price: "Rs 130,000/-" },
    { name: "Braces – Both Arches", price: "Rs 250,000/-" },
    { name: "Payment Plan – 1st Visit for Braces", price: "Rs 10,000/-" },
    {
      name: "Payment Plan – 2nd Visit for Braces – Bond Up",
      price: "50% of the total",
    },
    {
      name: "Payment Plan – 3rd & Any Other Visit – Adjustment",
      price: "Rs 5,000/-",
    },
  ]);

  return (
    <>
      <section id="price-list" class="shadow-box bg-custom-blue">
        <div class="mt-4">
          <h3 class="text-center">Price List</h3>
          <button
            class="btn btn-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#addServiceModal"
          >
            Add New Service
          </button>
          <div class="dropdown mb-3">
            <select class="form-select mb-3" id="services">
              <option value="">Select Service</option>
              {/* <!-- Services --> */}
            </select>
          </div>

          <button
            class="btn btn-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#editServiceModal "
          >
            Show Services
          </button>

          {/* <!-- Add Service Modal --> */}
          <div
            class="modal fade"
            id="addServiceModal"
            tabindex="-1"
            aria-labelledby="addServiceModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title text-custom-blue"
                    id="addServiceModalLabel"
                  >
                    Add New Service
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form id="addServiceForm">
                    <div class="mb-3">
                      <label
                        for="serviceName"
                        class="form-label text-custom-blue"
                      >
                        Service Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="serviceName"
                        placeholder="Enter Service Name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="servicePrice"
                        class="form-label text-custom-blue"
                      >
                        Service Price
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="servicePrice"
                        placeholder="Enter Service Price"
                        required
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Add Service
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
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

          {/* <!-- Edit Service Modal --> */}
          <div
            class="modal fade"
            id="editServiceModal"
            tabindex="-1"
            aria-labelledby="editServiceModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title text-custom-blue"
                    id="editServiceModalLabel"
                  >
                    Edit Service
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form id="editServiceForm">
                    <div class="mb-3">
                      <label
                        for="editServiceName"
                        class="form-label text-custom-blue"
                      >
                        Service Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="editServiceName"
                        placeholder="Enter Service Name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="editServicePrice"
                        class="form-label text-custom-blue"
                      >
                        Service Price
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="editServicePrice"
                        placeholder="Enter Service Price"
                        required
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Update Service
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      id="deleteServiceBtn"
                    >
                      Delete Service
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
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
        </div>
      </section>
    </>
  );
};

export default PriceList;
