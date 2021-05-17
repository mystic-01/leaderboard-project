import React from "react";
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";

import { ReactComponent as BrandLogo } from "../../icons/leaderboard-logo.svg";

import "./NavbarCool.css";

const NavbarCool = () => {
  return (
    <nav className="navbarCool">
      <div className="navbarCool__logo">
        <BrandLogo/>
        <Link to="/">LeaderBirds</Link>
      </div>
      <span className="navbarCool__icon"><DehazeIcon /></span> 
      <div className="navbarCool__menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">More</Link>
        <span className="navbarCool__more"><ExpandMoreIcon /></span> 
      </div>
    </nav>
  );
};

export default NavbarCool;

