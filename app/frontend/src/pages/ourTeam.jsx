import React from "react";
import NavbarComponent from "../components/navbar";
import Footer from "../components/footer";
import Team from "../components/Team";
import AppoinmentPolicy from "../components/appoinmentPolicy";

const OurTeam = () => {
    return (
        <>
        <Helmet>
        <title>Our Team</title>
        <meta name="description" content="This is the OurTeam page" />
        </Helmet>

        <NavbarComponent />
        <Team />
        <AppoinmentPolicy />
        <Footer />
        </>
    );
};
export default OurTeam;