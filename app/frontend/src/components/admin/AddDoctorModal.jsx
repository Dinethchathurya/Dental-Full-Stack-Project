import React from "react";
import { useForm } from "react-hook-form";

const AddDoctorModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle the form submission logic here
  };

  return (
    <>
      <section id="Team" class="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">Doctors List</h3>
        <button
          className="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#addDoctorModal"
        >
          Add New Doctor
        </button>
        <table className="table table-striped " id="doctorTable">
          <thead>
            <tr className="text-center">
              <th>Doctor Name</th>
              <th>Specialty</th>
              <th>Registration Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{/* <!-- Doctors--> */}</tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="addDoctorModal"
        tabIndex="-1"
        aria-labelledby="addDoctorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-custom-blue">
              <h5 className="modal-title text-center" id="addDoctorModalLabel">
                Add New Doctor
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
                  <input
                    type="text"
                    className="form-control"
                    id="doctorName"
                    placeholder="Enter Doctor Name"
                    {...register("doctorName", {
                      required: "Doctor name is required",
                    })}
                  />
                  {errors.doctorName && (
                    <p className="text-danger">{errors.doctorName.message}</p>
                  )}
                </div>
                <div className="mb-3 text-custom-blue">
                  <label htmlFor="doctorSpecialty" className="form-label">
                    Specialty
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="doctorSpecialty"
                    placeholder="Enter Specialty"
                    {...register("doctorSpecialty", {
                      required: "Specialty is required",
                    })}
                  />
                  {errors.doctorSpecialty && (
                    <p className="text-danger">
                      {errors.doctorSpecialty.message}
                    </p>
                  )}
                </div>
                <div className="mb-3 text-custom-blue">
                  <label htmlFor="doctorRegistration" className="form-label">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="doctorRegistration"
                    placeholder="Enter Registration Number"
                    {...register("doctorRegistration", {
                      required: "Registration number is required",
                    })}
                  />
                  {errors.doctorRegistration && (
                    <p className="text-danger">
                      {errors.doctorRegistration.message}
                    </p>
                  )}
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Add Doctor
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

export default AddDoctorModal;
