import React,  {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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


export default function UserCreateStepTwo() {

	const { setStep, userData, setUserData } = useContext(multiStepContext);
	const classes = useStyles();

	return(
		<div>

			<Card className={classes.root}>
			<CardContent>

			<div>
				<TextField label="Email" value={userData['email']} onChange={(e) => setUserData({...userData, "email": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Country" value={userData['country']} onChange={(e) => setUserData({...userData, "country": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="District" value={userData['district']} onChange={(e) => setUserData({...userData, "district": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
				<Button variant="contained" onClick={() => setStep(1)} color="secondary">Back</Button><span> </span>
				<Button variant="contained" onClick={() => setStep(3)} color="primary">Next</Button>
			</div>

			</CardContent>
			</Card>

		</div>
		)
}