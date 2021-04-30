import React , {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import './Create.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  Button,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root2: {
  	margin: theme.spacing(1),
    height: "4vw",
  },
}));


const Create = () => {
	const classesforform = useStyles();
	const [value1, setValue1] = React.useState('');
	const [value2, setValue2] = React.useState('');
	const [participants, setParticipants] = React.useState([]);



	const handleChange1 = (event) => {
		setValue1(event.target.value);
	};
	const handleChange2 = (event) => {
		setValue2(event.target.value);
	};
	const handleParticipantNameChange = (event) => {
		setValue2(event.target.value);
	};
	const handleParticipantScoreChange = (event) => {
		setValue2(event.target.value);
	};
	const deleteParticipant = (event) => {
		setValue2(event.target.value);
	};

    const row = [{  
        name: 'Ayaan',  
        score: 26  
        },{  
        name: 'Ahana',  
        score: 22  
        },{  
        name: 'Peter',  
        score: 40   
        },{  
        name: 'Virat',  
        score: 30  
        },{  
        name: 'Rohit',  
        score: 32  
        },{  
        name: 'Dhoni',  
        score: 37  
        }]  

    const [open, setOpen] = React.useState(false);

    const addParticipant = () => {
    	setParticipants(participants => [...participants, {'name':'', 'score': 0} ] );
        // var allParticipants=participants;
        // console.log(allParticipants);
        // allParticipants.push({'name':'', 'score': 0});
        // setParticipants({participants: allParticipants});
    }

    return (
    	<React.Fragment>
    	<div>
        <Navbar/>
        <Container>
        	<Typography style={{ backgroundColor: '#e7e7e7' ,fontFamily: 'Raleway' , height: '40vh' }} >
        	<center id='headWrapper'><h2>Create Your New Board</h2></center>
        	</Typography>
        </Container>
        <Container style={{ backgroundColor: '#fff'}}>
        	<h3>Details</h3>
        	<div>
        	<p>Name</p>
	        <form className={classesforform.root} noValidate autoComplete="off" >
		        <TextField 
		        	variant="outlined"
		        	value={value1}
		        	label="Your Board Name"
		          	onChange={handleChange1}
		        />
		    </form>
		    <p>Description</p>
	        <form className={classesforform.root} noValidate autoComplete="off" >
		        <TextField 
		        	variant="outlined"
		        	value={value2}
		        	label="Your Board Description"
		          	onChange={handleChange2}
		        />
		    </form>
		   	</div>
		   	<div className='footer'>
			   	<Button variant="outlined" onClick={addParticipant} >Add Participant</Button>
			   	&nbsp;&nbsp;&nbsp;&nbsp;
			   	<Button variant="contained" >Create New Board</Button>
		   	</div>
		</Container>
        </div>

        {
            participants.length > 0 ? 
            <center>
	            <div className="participants">
	                <h3>Participants</h3>
	            {
	                participants.map(
	                    (item, index) => ( 
	                        <div key={index}>
	                            <h4>Participant {index + 1} </h4>
	                            <form className={classesforform.root} noValidate autoComplete="off" >
							        <TextField 
							        	variant="outlined"
							        	label="Name"
							        	value={item.name}
							          	onChange={handleParticipantNameChange}
							        />
							        <TextField 
							        	variant="outlined"
							        	label="Score"
							        	value={item.score}
							          	onChange={handleParticipantScoreChange}
							        />
							        <Button className={classesforform.root2} variant="contained" color="secondary" onClick={deleteParticipant}>Delete</Button>							        
						    	</form>
	                        </div>
	                    )
	                )
	            }
	            </div>
	        </center>
	            : null
        }

        <center>
	     <TableRow >
	        <TableCell>
	          <IconButton aria-label="row" size="small" onClick={() => setOpen(!open)}>
	            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
	            { <p> See History Of LeaderBorad</p> }
	          </IconButton>
	        </TableCell>
	      </TableRow>

	      <TableRow>
	        <TableCell >
	          <Collapse in={open} timeout="auto" unmountOnExit>
	            <Box >
	              <Typography variant="h6" gutterBottom component="div">
	                History
	              </Typography>
	              <Table size="small" aria-label="purchases">
	                <TableHead>
	                  <TableRow>
	                    <TableCell>Name</TableCell>
	                    <TableCell align="right">Score	</TableCell>
	                  </TableRow>
	                </TableHead>
	                <TableBody>
	                  {row.map((historyRow) => (
	                    <TableRow >
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
	      </center>
    	</React.Fragment>
    );
};

export default Create;
// <div style="background-color: #ffff00; border-width:1px; border-style: solid; border-color: #000000; height: 500px">
// <h2>
//     CREATE LEADERBOARD!
// </h2>


// <Box mx="auto" className={classesforform.root}>
// 	<Button variant="contained"
//       color="green"
//       className={classesforform.root2}
//       mt={5}
//       style={{
//         backgroundColor: "green",
//         color: "white"
//       }}>
//       Add
//     </Button>
// </Box>