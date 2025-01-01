import React from "react";
import NavbarComponent from "../components/navbar";
import Footer from "../components/footer";
import Team from "../components/Team";
import AppoinmentPolicy from "../components/appoinmentPolicy";

const OurTeam = () => {
    return (
        <>
        <NavbarComponent />
        <Team />
        <AppoinmentPolicy />
        <Footer />
        </>
    );
};
export default OurTeam;