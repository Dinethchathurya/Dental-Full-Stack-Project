import React from "react";
import HomePage from "./pages/home";
import Price from "./pages/price";
import OurTeam from "./pages/ourTeam";
import Booking from "./pages/booking";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import Register from "./pages/register";

function App() {
  return (
    <>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/price" element={<Price />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="/dashbord" element={<AdminDashboard/>} />
      </Routes>
    </HelmetProvider>
    </>
  );
}
export default App;
