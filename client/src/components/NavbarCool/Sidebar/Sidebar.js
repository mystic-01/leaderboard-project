import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import MoreOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar__menu">
            <Link to="/"><HomeOutlinedIcon />Home</Link>
            <Link to="/about"><QuestionAnswerOutlinedIcon />About</Link>
            <Link to="/create"><CreateOutlinedIcon />Create</Link>
            <Link to="/about"><MoreOutlinedIcon />More</Link>
        </div>
    );
};

export default Sidebar;
