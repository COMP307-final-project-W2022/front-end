import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RestrictedRoute = ({ user, auth, redirectTo }) => {
  const allow = (user == null && !auth) || (user != null && auth);

  return allow ? <Outlet /> : <Navigate to={redirectTo} />;
};
export default RestrictedRoute;
