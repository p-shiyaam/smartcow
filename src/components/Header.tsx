import React from "react";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header-container">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
