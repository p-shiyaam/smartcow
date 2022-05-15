import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../contexts";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { isLoggedIn, dispatch } = useContext(AppContext);
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: {} });
    navigation("/login");
  };
  return (
    <div className="header-container">
      <h1>{title}</h1>
      {isLoggedIn && <button onClick={handleLogout}>logout</button>}
    </div>
  );
};

export default Header;
