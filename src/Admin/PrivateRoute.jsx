import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem("admin_logged_in") === "true";

  return isAdminLoggedIn ? children : <Navigate to={"/admin"} />;
};

export default PrivateRoute;
