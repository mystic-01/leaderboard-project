import React from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

import HomeIcon from "@material-ui/icons/HomeWork";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CreateIcon from "@material-ui/icons/Create";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import sahil from "../../images/SAHIL.jpeg";
import harshit from "../../images/harshit.jpeg";

import "./Footer.css";

const Footer = () => {
  const alert = useAlert();
  const githubLinks = [
    "https://github.com/Sahilamin219",
    "https://github.com/mystic-01",
  ];
  const linkedinLinks = [
    "https://www.linkedin.com/in/sahil-amin/",
    "https://www.linkedin.com/in/you-know-who/",
  ];

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert.show("Copied successfully!", {
      type: "success",
    });
  };
  return (
    <footer>
      <main className="footer__main">
        <section className="footer__quickLinks">
          <h4>Quick Links</h4>
          <span></span>
          <Link to="/">
            <HomeIcon /> Home
          </Link>
          <Link to="/about">
            <QuestionAnswerIcon /> About
          </Link>
          <Link to="/create">
            <CreateIcon /> Create
          </Link>
        </section>

        <section className="footer__developerSection">
          <h4>Developers</h4>
          <span></span>
          <div className="footer__developer">
            <img src={sahil} alt="Sahil" />
            <div>
              <p>Sahil Amin</p>
              <div>
                <a href={githubLinks[0]} className="github">
                  <GitHubIcon />
                </a>
                <a href={linkedinLinks[0]} className="linkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__developer">
            <img src={harshit} alt="Harshit" />
            <div>
              <p>Harshit Sharma</p>
              <div>
                <a href={githubLinks[1]} className="github">
                  <GitHubIcon />
                </a>
                <a href={linkedinLinks[1]} className="linkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="footer__contactUs">
          <h4>Contact us</h4>
          <span></span>
          <ul>
            <li
              className="email"
              onClick={() => copyText("sahilamin219@gmail.com")}
            >
              <EmailIcon /> sahilamin219@gmail.com
            </li>
            <li className="phone" onClick={() => copyText("9990108490")}>
              <PhoneIcon /> +91-9990108490
            </li>
            <li
              className="email"
              onClick={() => copyText("harshitsh151@gmail.com")}
            >
              <EmailIcon /> harshitsh151@gmail.com
            </li>
            <li className="phone" onClick={() => copyText("9250722192")}>
              <PhoneIcon /> +91-9250722192
            </li>
          </ul>
        </section>
      </main>
      <div className="footer__valediction">
        Copyright &copy; 2021 | <a href="#footer">LeaderBirds</a>
      </div>
    </footer>
  );
};

export default Footer;
