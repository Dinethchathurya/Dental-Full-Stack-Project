import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DashboardAppoimantsDoctorOption from "./admin/adminComponents/dashboardAppoimentsDoctorOption";
import SelectOptionForDate from "./selectOptionForDate";

const BookAnAppointment = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  // Handler when a service is selected
  const handleServiceChange = (e) => {
    const selectedServiceId = e.target.value;

    // Find the selected service based on the ID
    const selectedService = services.find(
      (service) => service._id === selectedServiceId
    );

    // If a service is selected, update the price
    if (selectedService) {
      setSelectedPrice(selectedService.price); // Assuming your service object has a "price" property
    } else {
      setSelectedPrice(null); // Reset if no service is selected
    }
  };

  const [doctors, setDoctors] = useState([]);
  const [dates, setDates] = useState([]);
  const [services, setServices] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await axios.post(
        "http://localhost:9000/create-payment-intent",
        {
          
          patientName : data.patientName,
          mobileNumber : data.mobileNumber,
          emailAddress : data.emailAddress,
          doctor : data.doctor,
          service : data.service,
          appointmentDate : data.appointmentDate,
          selectedPrice :selectedPrice,

        }
      );
      sessionStorage.setItem("patientName" , data.patientName);
      sessionStorage.setItem("mobileNumber" , data.mobileNumber);
      sessionStorage.setItem("emailAddress" , data.emailAddress);
      sessionStorage.setItem("doctor" , data.doctor);
      sessionStorage.setItem("service" , data.service);
      sessionStorage.setItem("appointmentDate" , data.appointmentDate);
      sessionStorage.setItem("price", selectedPrice);
 
      if (response) {
        console.log(response.data.clientSecret);
      }
      const clientSecret = response.data.clientSecret;
      if (clientSecret) {
        navigate("/checkout", {
          state: { clientSecret: response.data.clientSecret },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function getDoctors() {
    try {
      const response = await axios.get("http://localhost:9000/getDoctors");
      if (response.data) {
        setDoctors(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getDates() {
    try {
      const response = await axios.get("http://localhost:9000/getDates");
      if (response.data) {
        setDates(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function GetServices() {
    try {
      const response = await axios.get("http://localhost:9000/getServices");
      if (response.data) {
        setServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDoctors();
    getDates();
    GetServices();
  }, []);

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
                    {doctors.map((doctor) => {
                      return (
                        <DashboardAppoimantsDoctorOption
                          key={doctor._id}
                          value={doctor._id}
                          option={doctor.name}
                        />
                      );
                    })}
                  </select>
                  {errors.doctor && (
                    <span className="text-danger">{errors.doctor.message}</span>
                  )}
                </div>

                {/* service */}
                <div className="mb-3">
                  <label htmlFor="service" className="form-label">
                    service
                  </label>
                  <select
                    className="form-select"
                    id="service"
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    onChange={handleServiceChange}
                  >
                    <option value="">Select the service</option>
                    {services.map((service) => {
                      return (
                        <DashboardAppoimantsDoctorOption
                          key={service._id}
                          value={service._id}
                          option={service.name}
                        />
                      );
                    })}
                  </select>
                  {errors.service && (
                    <span className="text-danger">
                      {errors.service.message}
                    </span>
                  )}
                  {selectedPrice && (
                    <div className="service-price">
                      <p>Price: ${selectedPrice}</p>
                    </div>
                  )}

                  {/* Display the price if a service is selected */}
                </div>

                {/* Appointment Date */}
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">
                    Select a Date
                  </label>
                  <select
                    className="form-select"
                    id="appointmentDate"
                    {...register("appointmentDate", {
                      required: "Please select a date",
                    })}
                  >
                    <option value="">Select the date</option>
                    {dates.map((date) => {
                      return (
                        <SelectOptionForDate
                          key={date._id}
                          value={date._id}
                          option={date.date}
                        />
                      );
                    })}
                  </select>

                  {errors.date && (
                    <span className="text-danger">{errors.date.message}</span>
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
