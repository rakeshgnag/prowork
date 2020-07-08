import React, {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
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
		  formControl: {
		    minWidth: 250,
		    marginLeft: 70
		  },
		  selectEmpty: {
		    marginTop: theme.spacing(2),
		  },
}));

export default function UserCreateStepThree() {

	const { setStep,updateUserForm, handleInputChange, handleSubmit, userForm } = useContext(multiStepContext);
	const classes = useStyles();

	return(
		<div>
			<Card className={classes.root}>
			<CardContent>

			<div>
				<TextField label="Landmark" name="landmark" value={userForm.landmark} onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>
			<div>
				<TextField label="Postal Code" name="postalCode" value={userForm.postalCode} onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
				<TextField label="Country" name="country" value={userForm.country} onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
				<FormControl className={classes.formControl}>
				 <FormGroup row>
				      <FormControlLabel
				        control={<Checkbox checked={userForm.terms} 
				        name="terms"
				        value="true"
				        onClick={(e) => updateUserForm({ ...userForm, terms: (userForm.terms ? false : true ) }) }
				        name="terms" />}
				        label="I agree for the Terms & Conditions"
				      />
				  </FormGroup>
				  </FormControl>
			</div>

			<div>
				<Button variant="contained" onClick={() => setStep(2)} color="secondary">Back</Button>
				<span> </span>
				<Button variant="contained" onClick={(e) => handleSubmit(e)}  color="primary">Submit</Button>
			</div>

			</CardContent>
			</Card>
	        
		</div>
		)
}