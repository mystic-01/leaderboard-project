import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import HomeOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import MoreOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import { ReactComponent as BrandLogo } from "../../icons/Trophy.svg";

import "./NavbarCool.css";

const NavbarCool = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const handleNavbar = () => {
    setSidebarActive((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbarCool">
        <div className="navbarCool__logo">
          <BrandLogo />
          <Link to="/">LeaderBirds</Link>
        </div>
        <span className="navbarCool__toggleButton" onClick={handleNavbar}>
          {sidebarActive ? <ToggleOnIcon /> : <ToggleOffIcon />}
        </span>
        <div className="navbarCool__menu">
          <Link to="/">Home <span></span></Link>
          <Link to="/about">About <span></span></Link>
          <Link to="/create">Create <span></span></Link>
        </div>
      </nav>
      <div className={sidebarActive ? "sidebar__menu active" : "sidebar__menu"}>
        <Link to="/">
          <HomeOutlinedIcon />
          Home
        </Link>
        <Link to="/about">
          <QuestionAnswerOutlinedIcon />
          About
        </Link>
        <Link to="/create">
          <CreateOutlinedIcon />
          Create
        </Link>
        <Link to="/about">
          <MoreOutlinedIcon />
          More
        </Link>
      </div>
    </>
  );
};

export default NavbarCool;
