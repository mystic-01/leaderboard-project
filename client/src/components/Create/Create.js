import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createBoard, fetchBoard, editBoard } from "../../actions/leaderboard";
import NavbarCool from "../NavbarCool/NavbarCool";
import useStyles from "./styles";

const Create = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [boardName, setBoardName] = useState("");
  const [boardDescription, setBoardDescription] = useState("");
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchBoard(params.id));
      
      if (localStorage.getItem("board")) {
        const data = JSON.parse(localStorage.getItem("board"));
        setBoardName(data.boardName);
        console.log(data.boardName);
        setBoardDescription(data.boardDescription);
        setParticipants(data.participants);
      }
    }
  }, [params, dispatch]);

  const handleParticipantNameChange = (e, index) => {
    participants[index].name = e.target.value;
    setParticipants([...participants]);
  };
  const handleParticipantScoreChange = (e, index) => {
    participants[index].score = e.target.value;
    setParticipants([...participants]);
  };

  const deleteParticipant = (e, index) => {
    setParticipants(participants.filter((item, i) => i !== index));
  };

  const addParticipant = () => {
    setParticipants([...participants, { name: "", score: "" }]);
  };

  const createNewBoard = (e) => {
    e.preventDefault();
    participants.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    const board = { boardName, boardDescription, participants };
    if (params.id) {
      dispatch(editBoard(params.id, board, history));
    } else {
      dispatch(createBoard(board, history));
    }
  };

  // Code to scroll to bottom when the user adds a participant!
  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [participants]);

  // Code to scroll to top on page load!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarCool />
      <Typography className={classes.heading1}>
        Create your new board!
      </Typography>
      <form
        className={classes.sectionMainCover}
        autoComplete="off"
        onSubmit={createNewBoard}
      >
        <Container className={classes.sectionMain}>
          <Typography className={classes.heading2}>Details</Typography>
          <div className={classes.root}>
            <Typography className={classes.heading3}>Name</Typography>
            <TextField
              autoFocus
              label="Board Name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              variant="outlined"
              spellCheck="false"
              required
            />
            <Typography className={classes.heading3}>Description</Typography>
            <TextField
              label="Board Description"
              value={boardDescription}
              onChange={(e) => setBoardDescription(e.target.value)}
              variant="outlined"
              spellCheck="false"
              required
            />
          </div>

          {participants.length > 0 ? (
            <>
              <Typography className={classes.heading2}>Participants</Typography>
              {participants.map((item, index) => (
                <div key={index} className={classes.root}>
                  <Typography className={classes.heading3}>
                    Participant {index + 1}
                  </Typography>
                  <TextField
                    autoFocus
                    label="Name"
                    value={participants[index].name}
                    onChange={(e) => handleParticipantNameChange(e, index)}
                    variant="outlined"
                    spellCheck="false"
                    required
                  />
                  <TextField
                    type="number"
                    label="Score"
                    value={participants[index].score}
                    onChange={(e) => handleParticipantScoreChange(e, index)}
                    variant="outlined"
                    InputProps={{ inputProps: { max: 99999 } }}
                    required
                  />
                  <Button
                    className={classes.root2}
                    variant="contained"
                    color="secondary"
                    onClick={(e) => deleteParticipant(e, index)}
                  >
                    X
                  </Button>
                </div>
              ))}
            </>
          ) : null}
          <div className={classes.footer}>
            <Button
              className={classes.footerButton}
              style={{ color: "#5200af" }}
              variant="outlined"
              onClick={addParticipant}
            >
              Add Participant
            </Button>
            <Button
              type="submit"
              className={classes.footerButton}
              color="primary"
              variant="contained"
            >
              Create Board
            </Button>
          </div>
        </Container>
      </form>

      <div ref={endRef} />
    </>
  );
};
export default Create;
