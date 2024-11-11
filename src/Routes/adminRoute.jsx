import React from 'react';
import AdminLogin from "../Admin/AdminLogin";
import AdminDashboard from "../Admin/AdminDashboard";
import PrivateRoute from "../Admin/PrivateRoute";
import { Routes, Route } from 'react-router-dom';

const adminRoute = () => {
  return (
    <Routes>
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route
      path='/adminDashboard'
      element={
      <PrivateRoute>
      <AdminDashboard />
      </PrivateRoute>
      }
      />
    </Routes>
  )
}

export default adminRoute
