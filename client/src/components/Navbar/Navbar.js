import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ReactComponent as BrandLogo } from '../../icons/leaderboard-logo.svg';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar"> 
                <span><BrandLogo /><a className="navbar__brand" href="/">LeaderBirds</a></span>    
                <a className="navbar__link" href="/more">More <ExpandMoreIcon /></a>            
                <a className="navbar__link" href="/create">Create</a>            
                <a className="navbar__link" href="/about">About</a>
                <a className="navbar__link" href="/">Home</a>
        </nav>
    );
};

export default Navbar;
