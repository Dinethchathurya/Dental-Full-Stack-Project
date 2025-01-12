import React from "react";
import HomePage from "./pages/home";
import Price from "./pages/price";
import OurTeam from "./pages/ourTeam";
import Booking from "./pages/booking";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Register from "./pages/register";
import ProtectedRoute from "./protectedRoutes/userProtectedRoute";
import CheckoutForm from "./pages/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router";
import CompletePage from "./pages/CompletePage";

function App() {
  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";
  const stripePromise = loadStripe(
    "pk_test_51Qg5RMRbw5Znp41bbO2vGnrz9kOJMdnGrS6VyOgtrkaYK6z13qNso5NNCFwFvskyH8UbIBMBr4GhhWo15akDjgsp00cewlG6nR"
  );
  const location = useLocation();
  const clientSecret = location.state?.clientSecret; 
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<Price />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* <Route path="/booking" element={<Booking />} /> */}
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Elements
                  options={{ clientSecret, appearance, loader }}
                  stripe={stripePromise}
                >
                  <CheckoutForm />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route
            path="/complete"
            element={
              <ProtectedRoute>
                <Elements
                  options={{ clientSecret, appearance, loader }}
                  stripe={stripePromise}
                >
                  <CompletePage />
                </Elements>
              </ProtectedRoute>
            }
          />



          <Route path="/dashbord" element={<AdminDashboard />} />
        </Routes>
      </HelmetProvider>
    </>
  );
}
export default App;
