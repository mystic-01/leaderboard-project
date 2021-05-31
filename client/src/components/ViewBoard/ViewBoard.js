import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

import "./ViewBoard.css";

import NavbarCool from "../NavbarCool/NavbarCool";
import { fetchBoard } from "../../actions/leaderboard";
import useStyles from "./styles";

const ViewBoard = () => {
  const alert = useAlert();
  const classes = useStyles();
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { boardName, boardDescription, participants } = useSelector(
    (state) => state.leaderboard
  );

  const participantArray = participants || [{ name: "Loading...", score: 69 }];
  
  useEffect(() => {
    dispatch(fetchBoard(params.id));
  }, [params, dispatch]);

  // Code to scroll to top on page load!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareBoard = () => {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
    alert.show("Link to your board copied successfully!", {
      timeout: 5000,
      type: "success",
    });
  };

  return (
    <>
      <NavbarCool />
      <section className="viewBoard__boardInfo">
        <h1>{boardName || "Loading..."}</h1>
        <p>{boardDescription || "Loading..."}</p>
      </section>

      <main className="viewBoard__bottom">
        <div className="viewBoard__actionButtonSet">
          <div className="viewBoard__button">
            <Link to={`/create/${params.id}`}>Edit Board</Link>
          </div>
          <button className="viewBoard__shareButton" onClick={shareBoard}>
            Share Board
          </button>
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
      </main>
    </>
  );
};

export default ViewBoard;
