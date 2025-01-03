import React from "react";
import NavbarComponent from "../components/navbar";
import Footer from "../components/footer";
import Prices from "../components/prices";

const Price = () =>{
    return (
        <>
        <Helmet>
        <title>Price</title>
        <meta name="description" content="This is the Price page" />
        </Helmet>

        <NavbarComponent />

        <Prices />
        <Footer />
        </>
    );
}
export default Price