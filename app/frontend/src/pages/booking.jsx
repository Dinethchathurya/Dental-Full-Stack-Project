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
  const [services, setServices] = useState([]);



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

  useEffect(()=>{
    GetServices();
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
        <table className="table table-striped" id="doctorTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Booking Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(bookingCountsByDate).map((date) => {
                const bookingsForDate = bookingCountsByDate[date];
                return Object.keys(bookingsForDate).map((doctor) => (
                  <tr key={`${date}-${doctor}`}>
                    <td>{date}</td>
                    <td>{doctor}</td>
                    <td>{bookingsForDate[doctor]}/10</td>
                  </tr>
                ));
              })}
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
