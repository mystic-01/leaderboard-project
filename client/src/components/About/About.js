import React from "react";

import NavbarCool from "../NavbarCool/NavbarCool";
import Footer from "../Footer/Footer";

import trophy from "../../images/8601.png";
import creators from "../../images/web-developers-illustration.jpg";
import harshit from "../../images/harshit.jpg";
import sahil from "../../images/SAHIL.jpeg";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <NavbarCool />
      <section className="about__headWrapper textLeft">
        <div className="about__textWrapper">
          <h2>LeaderBirds?</h2>
          <span></span>
          <p>
            LeaderBirds is a multidisciplinary creative leader board making
            project. We work together to design, create and produce work that we
            are proud of, for folks that we believe in. We are available for
            hire in a wide range of creative disciplines for a variety of jobs,
            projects and gigs.
          </p>
        </div>
        <img src={trophy} alt="Trophy" />
      </section>

      <section className="about__headWrapper textRight">
        <img src={creators} alt="Creators" />
        <div className="about__textWrapper">
          <h2>Meet The Creators</h2>
          <span></span>
          <p>
            As Plato once said and we quote "Need is the mother of invention!"
            Well, obviously a leaderboard making tool is no invention but that
            principle was indeed a guiding factor in creating this project. Be
            it the list of Periodic elements by their atomic numbers, a
            student's list of marks or even the IPL points table; leaderbirds
            can be used to make any an all. And not just that, wanna show a
            leaderboard to your friends? Go ahead! Wanna make a small change in
            the board? We got you covered! Also, feel free to reach if you have
            any ideas to improve the project or if you would like to work
            together on something else.
          </p>
        </div>
      </section>

      <section className="about__headWrapper textLeft">
        <div className="about__textWrapper">
          <h2>Sahil Amin</h2>
          <span></span>
          <p>
            Hey there! I believe in Responsive web design is what’s shaping the
            online experience now. The internet is now a platform of services
            and I have the skills to offer your visitors the optimal viewing
            experience, regardless of the device they choose. I can deal with
            all the creative and technological issues that this fundamentally
            different and innovative approach might present – much more than
            just adjusting screen resolutions and using automatically resizable
            images.
          </p>
        </div>
        <img src={sahil} alt="Sahil" />
      </section>

      <section className="about__headWrapper textRight">
        <img src={harshit} alt="Harshit" />
        <div className="about__textWrapper">
          <h2>Harshit Sharma</h2>
          <span></span>
          <p>
            Hello! I am a Highly motivated front-end developer with an engaging
            client portfolio. I tend to improve performance of my product while
            learning programming, with all means, from books to blogs and
            everything in between. Driven and permanently curious, I am now
            specialized in fixing front-end issues that other technology
            providers can't manage. My web development skills include but are
            not limited to HTML5, CSS3, MaterialUI, Bootstrap, ReactJS, Redux,
            NodeJS, ExpressJS, Mongodb at professional level.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
