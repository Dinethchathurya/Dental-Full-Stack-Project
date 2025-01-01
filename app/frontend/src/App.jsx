import React from "react";
import NavbarComponent from "./components/navbar";
import Header from "./components/heder";
import About from "./components/about";
import Services from  "./components/services";
import Contact from "./components/contact";
import Location from "./components/location";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavbarComponent/>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
      <Location/>
      <Footer/>
      
    </>
  );
}

export default App;
