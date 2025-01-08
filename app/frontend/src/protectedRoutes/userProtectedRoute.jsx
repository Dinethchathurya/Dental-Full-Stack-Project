import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const isAuthenticated = sessionStorage.getItem('token');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate 
    to="/login" 
    state={{ from: location }} 
    replace 
  />
  }

  return children;
};

export default ProtectedRoute;
