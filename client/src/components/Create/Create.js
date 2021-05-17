import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { createBoard } from '../../actions/leaderboard';
import NavbarCool from "../NavbarCool/NavbarCool";
import useStyles from "./styles";

import "./Create.css";

const Create = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [boardName, setBoardName] = useState("");
  const [boardDescription, setBoardDescription] = useState("");

  const [participants, setParticipants] = useState([]);
  const [open, setOpen] = useState(false);

  const handleParticipantNameChange = (event, index) => {
    participants[index].name = event.target.value;
    setParticipants([...participants]);
  };
  const handleParticipantScoreChange = (event, index) => {
    participants[index].score = event.target.value;
    setParticipants([...participants]);
  };

  const deleteParticipant = (event, index) => {
    setParticipants(participants.filter((item, i) => i !== index));
  };

  const addParticipant = () => {
    setParticipants([...participants, { name: "", score: "" }]);
  };

  const createNewBoard = () => {
    const board = { boardName, boardDescription, participants };
    dispatch(createBoard(board));
  };

  const row = [
    { name: "Jack", score: 26 },
    { name: "Jane", score: 22 },
    { name: "Greg", score: 40 },
    { name: "John", score: 30 },
    { name: "Pete", score: 32 },
    { name: "Paul", score: 37 },
  ];

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
      <div className={classes.navbar}>
        <NavbarCool />
      </div>
      <Typography className={classes.heading1}>
        Create Your New Board
      </Typography>
      <div className={classes.sectionMainCover}>
        <Container className={classes.sectionMain}>
          <Typography variant="h5" className={classes.heading2}>
            Details
          </Typography>
          <Typography variant="h6" className={classes.heading3}>
            Name
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              variant="outlined"
              value={boardName}
              label="Board Name"
              onChange={(e) => setBoardName(e.target.value)}
              autoFocus
            />
          </form>
          <Typography className={classes.heading3}>Description</Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              variant="outlined"
              value={boardDescription}
              label="Board Description"
              onChange={(e) => setBoardDescription(e.target.value)}
            />
          </form>

          {participants.length > 0 ? (
            <div>
              <Typography variant="h5" className={classes.heading2}>
                Participants
              </Typography>
              {participants.map((item, index) => (
                <div key={index}>
                  <Typography className={classes.heading3}>
                    Participant {index + 1}
                  </Typography>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      variant="outlined"
                      label="Name"
                      value={participants[index].name}
                      onChange={(event) =>
                        handleParticipantNameChange(event, index)
                      }
                    />
                    <TextField
                      type="number"
                      variant="outlined"
                      label="Score"
                      value={participants[index].score}
                      onChange={(event) =>
                        handleParticipantScoreChange(event, index)
                      }
                    />
                    <Button
                      className={classes.root2}
                      variant="contained"
                      color="secondary"
                      onClick={(event) => deleteParticipant(event, index)}
                    >
                      X
                    </Button>
                  </form>
                </div>
              ))}
            </div>
          ) : null}
          <div className={classes.footer}>
            <Button
              className={classes.footerButton}
              variant="outlined"
              onClick={addParticipant}
              style={{ color: "#8C30F5" }}
            >
              Add Participant
            </Button>
            <Link to={`/view/${boardName}`}>
              <Button
                className={classes.footerButton}
                variant="contained"
                color="primary"
                onClick={createNewBoard}
              >
                Create Board
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      {/* <center>
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              {<p> See History Of LeaderBoard</p>}
            </IconButton>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Score </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.map((historyRow) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {historyRow.name}
                        </TableCell>
                        <TableCell align="right">{historyRow.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </center> */}
      <div ref={endRef} />
    </>
  );
};

export default Create;
