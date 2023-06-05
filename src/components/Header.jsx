import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>Get Ready To Complate Your Daily Goals</nav>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/About/name">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
};

export default Header;
