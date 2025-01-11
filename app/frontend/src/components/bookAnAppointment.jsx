import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const BookAnAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    console.log("Form Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:9000/create-payment-intent",
        data
      );
      if (response) {
        console.log(response.data.clientSecret);
      }
      const clientSecret  = response.data.clientSecret;

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="col-lg-5 shadow-sm bg-custom-blue"
        tabIndex="-1"
        id="appointmentModal"
      >
        <div className="modal-dialog p-4">
          <div className="modal-content">
            <h5 className="modal-title text-center">Book an Appointment</h5>
            <div className="modal-body">
              <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Patient Name */}
                <div className="mb-3">
                  <label htmlFor="patientName" className="form-label">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientName"
                    placeholder="Enter your name"
                    {...register("patientName", {
                      required: "Name is required",
                    })}
                  />
                  {errors.patientName && (
                    <span className="text-danger">
                      {errors.patientName.message}
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                    })}
                  />
                  {errors.mobileNumber && (
                    <span className="text-danger">
                      {errors.mobileNumber.message}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    placeholder="Enter your email"
                    {...register("emailAddress", {
                      required: "Email is required",
                    })}
                  />
                  {errors.emailAddress && (
                    <span className="text-danger">
                      {errors.emailAddress.message}
                    </span>
                  )}
                </div>

                {/* Doctor */}
                <div className="mb-3">
                  <label htmlFor="doctor" className="form-label">
                    Doctor
                  </label>
                  <select
                    className="form-select"
                    id="doctor"
                    {...register("doctor", {
                      required: "Please select a doctor",
                    })}
                  >
                    <option value="">Select the Doctor</option>
                    <option value="1">Dr Lahiru Rajakaruna</option>
                    <option value="2">Dr Deepali Nanayakkara</option>
                    <option value="3">Dr Malinda Senadhirathna</option>
                    <option value="4">Dr Dinali Gayasha</option>
                  </select>
                  {errors.doctor && (
                    <span className="text-danger">{errors.doctor.message}</span>
                  )}
                </div>

                {/* Appointment Date */}
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">
                    Select a Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    {...register("appointmentDate", {
                      required: "Please select a date",
                    })}
                  />
                  {errors.appointmentDate && (
                    <span className="text-danger">
                      {errors.appointmentDate.message}
                    </span>
                  )}
                </div>

                <div className="modal-footer d-flex justify-content-center align-items-center gap-3">
                  <button type="submit" className="btn btn-primary">
                    Book Appointment
                  </button>
                  {/* Close button */}
                  <button type="button" className="btn btn-secondary">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAnAppointment;
