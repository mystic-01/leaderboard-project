import React from "react";
import { Link } from "react-router-dom";

import NavbarCool from "../NavbarCool/NavbarCool";
import sideImage from "../../images/creative-side-image.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="home__sideImage" src={sideImage} alt="" />
      <div className="home__left">
        <NavbarCool />
        <div className="home__main">
          <h1 className="home__header">Leaderboard Creator</h1>
          <p className="home__subheading">
            LeaderBoard Creator is a free online leaderboard creation tool that
            allows you to easily setup, edit, and share leaderboards.
          </p>
          <div className="home__cta">
            <Link to="/create">Get Started!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
