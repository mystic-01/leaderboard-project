import React from "react";
// import { Container, Typography } from "@material-ui/core";
// import { Route, Link } from "react-router-dom";

// import Navbar from "../Navbar/Navbar";
import NavbarCool from '../NavbarCool/NavbarCool';
import harshit from "../../images/harshit.jpeg";
import sahil from "../../images/SAHIL.jpeg";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <NavbarCool />
      <center id="headWrapper">
        <div className="about__aboutUs">
          <h2>About Us</h2>
          <hr />
          <p>
            LeaderBirds is a multidisciplinary creative leaderBoard. We work
            together to design, create and produce work that we are proud of
            for folks that we believe in. We are available for hire in a wide
            range of creative disciplines for a variety of jobs, projects and
            gigs.
          </p>
        </div>
      </center>

      <center>
        <h2 style={{ margin: "40px 0 60px 0" }}> Meet The Creators </h2>
        <div className="about__card">
            <img
              src={harshit}
              alt="Avatar"
            />
              <h4>
                <strong>Harshit Sharma</strong>
              </h4>
              <em>Developer & Engineer</em>
              <hr />
            <center>
              <p>
                Hello! I am a Highly motivated front-end developer with a
                engaging client portfolio. I tend to improve performance of my
                product while learning programming , with all means ,from books
                to blogs. Driven and permanently curious, I am now specialized
                in fixing front-end issues that other technology providers can't
                manage. My Creative skills are HTML, Bootstrap 4, etc. at
                professional level. I take making UI Kit and FontAwesome, as a
                general hobby and the modern and responsive design template that
                i created is perfect to showcase on your portfolio, skills and
                experience
              </p>
            </center>
          </div>
        <div className="about__card">
          <img
            src={sahil}
            alt="Avatar"
          />
            <h4>
              <strong>Sahil Amin</strong>
            </h4>
            <em>Developer & Engineer</em>
            <hr />
          <center>
            <p>
              Hey there! I believe in Responsive web design is what’s shaping
              the online experience now. The internet is now a platform of
              services and I have the skills to offer your visitors the optimal
              viewing experience, regardless of the device they choose. I can
              deal with all the creative and technological issues that this
              fundamentally different and innovative approach might present –
              much more than just adjusting screen resolutions and using
              automatically resizable images.
            </p>
          </center>
          </div>
      </center>
    </div>
  );
};

export default About;
