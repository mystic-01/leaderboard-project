import React, { useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import "./ViewBoard.css";

import NavbarCool from "../NavbarCool/NavbarCool";
import useStyles from "./styles";

const ViewBoard = () => {
  const classes = useStyles();
  const history = useHistory();

  const { boardName, boardDescription, participants } = useSelector(
    (state) => state.leaderboard
  );

  const participantArray = participants || [
    { name: "Participant 1", score: 10 },
    { name: "Participant 2", score: 7 },
    { name: "Participant 3", score: 3 },
  ];

  // useEffect(() => {
  //   return () => {
  //     cleanup
  //   }
  // }, [history])

  return (
    <div className="viewBoard">
      <section className="viewBoard__top">
        <NavbarCool />
        <div className="viewBoard__boardInfo">
          <h1 className="viewBoard__boardTitle">{boardName || "Oops!"}</h1>
          <p className="viewBoard__boardDescription">
            {boardDescription || "Something went wrong. :("}
          </p>
        </div>
      </section>
      <section className="viewBoard__bottom">
        <div className="viewBoard__actionButtonSet">
          <Link to="/create"><button className="viewBoard__button">Edit Board</button></Link>
          <button className="viewBoard__button viewBoard__shareButton">Share Board</button>
        </div>
        <div className="viewBoard__box">
          {participantArray.map((participant, index) => (
            <Grid key={index} className={classes.grid} container spacing={0}>
              <Grid
                item
                 
                className={`${classes.centeringClass} 
                  ${
                    index === 0
                      ? classes.gold
                      : index === 1
                      ? classes.silver
                      : index === 2
                      ? classes.bronze
                      : classes.normaL
                  }`}
              >
                <Typography variant="h5" align="center">
                  {index + 1}
                </Typography>
              </Grid>
              <Grid item xs className={classes.centeringClass}>
                <Typography variant="h6" align="right">
                  {participant.name}
                </Typography>
              </Grid>
              <Grid item className={classes.centeringClass}>
                <Typography variant="h5" align="center">
                  {participant.score}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ViewBoard;
