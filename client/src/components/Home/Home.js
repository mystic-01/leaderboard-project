import React from 'react';
import Navbar from '../Navbar/Navbar';
import sideImage from '../../images/creative-side-image.png';
import {Route ,Link} from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <img className="home__sideImage" src={sideImage} alt=""/>
            <div className="home__left">
                <Navbar />
                <h1 className="home__header">Leaderboard Creator</h1>
                <p className="home__subheading">LeaderBoard Creator is a free online leaderboard creation tool that allows you to easily setup, edit, and share leaderboards.</p>
                <Link to="/create">
                    <button className="home__cta">Get Started!</button>
                </Link>
            </div>
        </div>    
    );
};

export default Home;
