import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Route ,Link} from 'react-router-dom';
import harshit from '../../images/harshit.jpeg';
import SAHIL from '../../images/SAHIL.jpeg';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './About.css';


const About = () => {
    return (
        <>
        <Navbar />
        <div>
        <Container>
            <Typography style={{ backgroundColor: '#e7e7e7' ,fontFamily: 'Raleway' , height: '40vh' }} >
            <center id='headWrapper'><h2>About Us</h2>
            <p>
            LeaderBirds is a multidisciplinary creative leaderBoard.
            We work together to design, create and produce work that we are proud of for folks that we believe in.
            We are available for hire in a wide range of creative disciplines for a variety of jobs, projects and gigs.
            </p>
            </center>
            </Typography>
        </Container>
        
        <center>
        <h2> Meet The Creaters </h2>
         <div className="card" style={{width:"80%"}}>
         <p>
         </p>
         <div className="container">
            <img src={harshit} alt="Avatar" style={{width:"20%"}} />
            <div className='container_title'>
                <h4><b>HARSHIT SHARMA</b></h4>
                <p>Developer & Engineer</p>
            </div>
            <center><p>

            Hello! I am a
            Highly motivated front-end developer with a engaging client portfolio. I tend to improve perfomance of my product while learning programming , with all means ,from books to blogs. Driven and permanently curious, I am now specialized in fixing front-end issues that other technology providers can't manage.
           
            My Creative skills are  HTML,  Bootstrap 4, etc. at professional level.
            I take making UI Kit and FontAwesome, as a genral hobbie and the modern and responsive design template that i createrd is perfect to showcase on your portfolio, skills and experience

            </p></center>
            &nbsp;

        </div>
        </div> 
        &nbsp;
        <div className="card" style={{width:"80%"}}>
          <img src={SAHIL} alt="Avatar" style={{width:"20%"}}/>
          <div className="container">
            <h4><b>Sahil Amin</b></h4>
            <p>Developer & Engineer</p>
          </div>
          <center>
          <p>
          Hey there! 
          I belive in Responsive webdesign is what’s shaping the online experience now. The internet is now a platform of services and I have the skills to offer your visitors the optimal viewing experience, regardless of the device they choose. I can deal with all the creative and technological issues that this fundamentally different and innovative approach might present – much more than just adjusting screen resolutions and using automatically resizable images.
          </p>
          </center>
        &nbsp;
        </div> 
        </center>

        </div>

        </>
    );
};

export default About;
