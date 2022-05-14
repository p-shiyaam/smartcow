import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../contexts";

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = useContext(AppContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
