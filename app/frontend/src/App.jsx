import React from "react";
import HomePage from "./pages/home";
import Price from "./pages/price";
import OurTeam from "./pages/ourTeam";
import Booking from "./pages/booking";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/adminLogin";
import { Routes, Route } from "react-router";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
     <HelmetProvider>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/price" element={<Price />} />
        <Route path="/ourteam" element={<OurTeam />}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/dashbord" element={<AdminDashboard/>}></Route>
      </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
