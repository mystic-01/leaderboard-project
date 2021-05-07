import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './ViewBoard.css';

import NavbarCool from '../NavbarCool/NavbarCool';

const ViewBoard = ({ boardName, boardDescription, participants }) => {

    const participantArray = participants || [
        { name: "Sahil", points: 10 },
        { name: "Harshit", points: 9 },
    ];

    return (
        <div className="viewBoard">
            <section className="viewBoard__top">
                <NavbarCool />
                <div className="viewBoard__boardInfo">
                    <h1 className="viewBoard__boardTitle">{boardName || "Oops!"}</h1>
                    <p className="viewBoard__boardDescription">{boardDescription || "Something went wrong. :("}</p>
                </div>
            </section>
            <section className="viewBoard__bottom">
                <div className="viewBoard__actionButtonSet">
                    <button className="viewBoard__button">Edit Board</button>
                    <button className="viewBoard__button">Share Board</button>
                </div>
                <div className="viewBoard__box">
                    <Grid container spacing={0}>
                        <Grid item xs><Typography variant="h6" align="center">RANK</Typography></Grid>
                        <Grid item xs={10}><Typography variant="h6" align="center">PARTICIPANT</Typography></Grid>
                        <Grid item xs><Typography variant="h6" align="center">SCORE</Typography></Grid>
                    </Grid>
                    {participantArray.map((participant, index) => 
                        <Grid container spacing={0}>
                            <Grid item xs><Typography variant="body2" align="center">{index + 1}</Typography></Grid>
                            <Grid item xs={10}><Typography variant="body1" align="center">{participant.name}</Typography></Grid>
                            <Grid item xs><Typography variant="body2" align="center">{participant.points}</Typography></Grid>
                        </Grid>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ViewBoard;
