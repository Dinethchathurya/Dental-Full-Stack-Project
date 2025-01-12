import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar";
import Footer from "../components/footer";
import OpenTimes from "../components/openTimes";
import BookAnAppointment from "../components/bookAnAppointment";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import DashboardPriceListTableRow from "../components/admin/adminComponents/dashboardPriceListTableRow";

const Booking = () => {

  const [bookingCountsByDate, setBookingCountsByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(""); 
  const [filteredBookings, setFilteredBookings] = useState({}); 
  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected); // Update the selected date
    setFilteredBookings(bookingCountsByDate[selected] || {});
  };
  

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.send("Hello from React client!");  
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);  
        console.log("Message from server:", data);
        setBookingCountsByDate(data);
        setFilteredBookings(bookingCountsByDate[selectedDate] || {});

      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };

  }, []);

  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  async function GetServices() {
    try {
      const response = await axios.get(
        "http://localhost:9000/getservices"
      );
      if (response.data) {
        setServices(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };  
  async function GetBookingAvailable() {
    try {
      const response = await axios.get(
        "http://localhost:9000/getBookingAvailable"
      );
      if (response.data) {
        setBookings(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    GetServices();
    GetBookingAvailable();
  },[]);

  return (
    <>
      <Helmet>
        <title>Booking</title>
        <meta name="description" content="This is the Booking page" />
      </Helmet>
      
      <NavbarComponent />

      <section id="services" className="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">Services</h3>
        <table className="table table-striped " id="doctorTable">
            <thead>
              <tr >
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => {
                  return(
                    <DashboardPriceListTableRow
                      key = {service._id}
                      name = {service.name}
                      price = {service.price}
                    />
                  );
                }
              )}
            </tbody>
          </table>

      </div>
      </section>

      <section id="availability" className="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">availability</h3>
        <select onChange={handleDateChange} value={selectedDate}>
      <option value="">Select a date</option>
      {Object.keys(bookingCountsByDate).map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
        <table className="table table-striped " id="doctorTable">
            <thead>
              <tr >
                <th>Doctor </th>
                <th>Booking Count</th>
              </tr>
            </thead>
            <tbody>
            {Object.keys(filteredBookings).map((doctor) => (
          <tr key={doctor}>
            <td>{doctor}</td>
            <td>{filteredBookings[doctor] +"/5"}</td>
          </tr>
        ))}
            </tbody>
          </table>

      </div>
      </section>

      <div className="container my-5">
        <BookAnAppointment />
        <OpenTimes />
      </div>

      <Footer />
    </>
  );
};

export default Booking;
