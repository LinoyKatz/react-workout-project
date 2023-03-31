import React from "react";
import { Link } from "react-router-dom";

import "./appHeader.css";
import Logo from "./Logo/Logo";
import HamburgButton from "./HamburgButton";

//this is the header with logo, and navigation option on mobile only
const AppHeader = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <HamburgButton />
    </div>
  );
};

export default AppHeader;
