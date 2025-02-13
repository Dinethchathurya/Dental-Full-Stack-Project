import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardAppoimantsDoctorOption from "./adminComponents/dashboardAppoimentsDoctorOption";

const Appointments = () => {

  const [bookings, setBookings] = useState([]);


    async function GetBookingAvailable() {
      try {
        const response = await axios.get(
          "http://localhost:9000/getBookings"
        );
        if (response.data) {
          setBookings(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  

  useEffect(() => {

    GetBookingAvailable();

  }, []);

  return (
    <section id="Appointments" className="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">Appointments</h3>
        <table className="table table-striped">
          <thead>
            <tr >
              <th scope="col">Patient tName</th>
              <th scope="col">Date</th>
              <th scope="col">Doctor</th>
              <th scope="col">Service</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody id="appointmentList">
  {bookings.map((booking) => (
    <tr key={booking._id}>
      <td>{booking.patientName}</td>
      <td>{new Date(booking.appointmentDate?.date).toLocaleDateString()}</td>
      <td>{booking.doctor?.name}</td>
      <td>{booking.service.name}</td>
      <td>{booking.service.price}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </section>
  );
};

export default Appointments;
