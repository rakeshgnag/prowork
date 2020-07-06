import React, {useContext} from 'react';
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

export default function UserCreateStepThree() {

	const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
	const classes = useStyles();

	return(
		<div>
			<Card className={classes.root}>
			<CardContent>

			<div>
				<TextField label="City" value={userData['city']} onChange={(e) => setUserData({...userData, "city": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Landmark" value={userData['landmark']} onChange={(e) => setUserData({...userData, "landmark": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Postal Code" value={userData['postalCode']} onChange={(e) => setUserData({...userData, "postalCode": e.target.value })} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
				<Button variant="contained" onClick={() => setStep(2)} color="secondary">Back</Button>
				<span> </span>
				<Button variant="contained" onClick={submitData} color="primary">Submit</Button>
			</div>

			</CardContent>
			</Card>

		</div>
		)
}