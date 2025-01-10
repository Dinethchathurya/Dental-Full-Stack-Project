import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardAppoimantsDoctorOption from "./adminComponents/dashboardAppoimentsDoctorOption";

const Appointments = () => {
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);

  async function getDoctors() {
    try {
      const response = await axios.get("http://localhost:9000/api/admin/getdoctors");
      if (response.data) {
        setDoctors(response.data);
      }
      
    } catch (error) {
      console.log(error);
    } 
    
  }

  useEffect(() => {
    getDoctors();

  }, []);

  return (
    <section id="Appointments" className="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">Appointments by Doctor</h3>
        <select className="form-select mb-3" onChange={(e) => setDoctor(e.target.value)} value={doctor}>
          <option value="">Select Doctor</option> {/* Set value to an empty string for the default option */}
          {/* <option value="1">Dr Lahiru Rajakaruna</option>
          <option value="2">Dr Deepali Nanayakkara</option>
          <option value="3">Dr Malinda Senadhirathna</option>
          <option value="4">Dr Dinali Gayasha</option> */}
          {doctors.map((doctor)=>{
            return(
              <DashboardAppoimantsDoctorOption 
                key={doctor._id}
                value={doctor._id}
                option={doctor.name}
              />
            );
          })}
        </select>
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody id="appointmentList">
            {/* Appointments should be dynamically rendered here */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Appointments;
