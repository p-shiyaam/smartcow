import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { AppContext } from "../contexts";
import { colors } from "../constants";
import { Icon } from "../icons";

const Sidebar: React.FC = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img className="logo-small" src="./logo_small.png" alt="logo small" />
      </div>
      {isLoggedIn && (
        <>
          <div className="sidebar-nav">
            <ul>
              <SidebarNavItem route="/create-video" name="create-video" />
              <SidebarNavItem route="/saved-videos" name="saved-videos" />
            </ul>
          </div>
          <div className="sidebar-footer">
            <Link to="/my-account">
              <img
                className="logo-small"
                src="./user-profile.png"
                alt="profile pic"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const SidebarNavItem = ({ route, name }) => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  return (
    <li className={`sidebar-nav-item ${isActiveRoute(route) ? "active" : ""}`}>
      <Link to={route}>
        <Icon
          name={name}
          color={isActiveRoute(route) ? colors.blue : colors.grayDark}
          size={28}
        />
      </Link>
    </li>
  );
};

export default Sidebar;
