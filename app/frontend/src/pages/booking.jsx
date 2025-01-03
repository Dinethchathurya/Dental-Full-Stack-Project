import React from "react";
import { useForm } from "react-hook-form";
import NavbarComponent from "../components/navbar";
import Footer from "../components/footer";
import OpenTimes from "../components/openTimes";
import BookAnAppointment from "../components/bookAnAppointment";
import { Helmet } from "react-helmet";

const Booking = () => {
  return (
    <>
      <Helmet>
        <title>Booking</title>
        <meta name="description" content="This is the Booking page" />
      </Helmet>
      
      <NavbarComponent />
      
      <div className="container my-5">
        <BookAnAppointment />
        <OpenTimes />
      </div>

      <Footer />
    </>
  );
};

export default Booking;
