import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";

import { ReactComponent as BrandLogo } from "../../icons/leaderboard-logo.svg";
import Sidebar from './Sidebar/Sidebar';

import "./NavbarCool.css";

const NavbarCool = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Close the sidebar if open on a larger screen.
  const resizeWindow = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    if (screenSize > 1200) {
      setShowSidebar(false);
    }
    return () => window.removeEventListener('resize', resizeWindow);
  }, [screenSize]);

  return (
    <div className="navbarCoolAndSidebar">
      <nav className="navbarCool">
        <div className="navbarCool__logo">
          <BrandLogo/>
          <Link to="/">LeaderBirds</Link>
        </div>
        <span className="navbarCool__icon" onClick={() => setShowSidebar(prevState => !prevState)}><DehazeIcon /></span> 
        <div className="navbarCool__menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/create">Create</Link>
          <Link to="/about">More</Link>
          <span className="navbarCool__more"><ExpandMoreIcon /></span> 
        </div>
      </nav>
      {showSidebar && <Sidebar />}
    </div>
  );
};

export default NavbarCool;