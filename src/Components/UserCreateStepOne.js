import React, {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

	
const useStyles = makeStyles({
		  root: {
		    minWidth: 275,
		  },
		  bullet: {
		    display: 'inline-block',
		    margin: '0 2px',
		    transform: 'scale(0.8)',
		  },
		  title: {
		    fontSize: 14,
		  },
		  pos: {
		    marginBottom: 12,
		  },
});

export default function UserCreateStepOne() {
	const { setStep, userData, setUserData } = useContext(multiStepContext);	
	const classes = useStyles();

	return(
		<div>
			<Card className={classes.root}>
			<CardContent>
			<div>
				<TextField label="First Name" value={userData['firstName']} onChange={(e) => setUserData({...userData, "firstName": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Last Name" value={userData['lastName']} onChange={(e) => setUserData({...userData, "lastName": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Contact Number" value={userData['contactNumber']} onChange={(e) => setUserData({...userData, "contactNumber": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>

			<Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
			</CardContent>
			</Card>
		</div>
		)
}