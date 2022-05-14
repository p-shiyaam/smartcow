import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../contexts";

type PublicRouteProps = {
  children: React.ReactElement;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLoggedIn } = useContext(AppContext);
  if (isLoggedIn) {
    return <Navigate to="/create-video" replace />;
  }
  return children;
};

export default PublicRoute;
