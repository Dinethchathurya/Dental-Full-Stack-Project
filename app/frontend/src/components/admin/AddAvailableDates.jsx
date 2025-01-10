import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DashboardAppoimantsDoctorOption from "./adminComponents/dashboardAppoimentsDoctorOption";
import DashboardDatesTableRow from "./adminComponents/dashboardDatesTableRow";

const AddAvailableDateModal = () => {
  const [doctors, setDoctors] = useState([]);
  const [dates ,setDates] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(
        "http://localhost:9000/api/admin/adddate",
        data
      );
      if (response.data) {
        alert(response.data);
        reset();
        getdates();
      }
    } catch (error) {
      console.log(error);
      alert("something wrong");
    }
  };

  async function getDoctors() {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/admin/getdoctors"
      );
      if (response.data) {
        setDoctors(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getdates() {
    try {
        const response = await axios.get(
            "http://localhost:9000/getdates"
          );
          if (response.data) {
            setDates(response.data);
          }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getDoctors();
    getdates();
  }, []);

  return (
    <>
      <section id="Team" className="shadow-box bg-custom-blue">
        <div className="mt-4">
          <h3 className="text-center">Doctors Availability</h3>
          <button
            className="btn btn-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#addDateModal"
          >
            Add New Date
          </button>
          <table className="table table-striped " id="doctorTable">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date) => {
                return (
                  <DashboardDatesTableRow
                    key={date._id}
                    doctorName={date.doctorName}
                    date={date.date}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          className="modal fade"
          id="addDateModal"
          tabIndex="-1"
          aria-labelledby="addDateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-custom-blue">
                <h5
                  className="modal-title text-center"
                  id="addDateModalLabel"
                >
                  Add New Date
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3 text-custom-blue">
                    <label htmlFor="doctorName" className="form-label">
                      Doctor Name
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
                      <span className="text-danger">
                        {errors.doctor.message}
                      </span>
                    )}

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

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Add Date
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAvailableDateModal;
