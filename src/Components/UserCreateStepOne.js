import React, {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
	
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
		    margin: theme.spacing(1),
		    minWidth: 220,
		  },
		  selectEmpty: {
		    marginTop: theme.spacing(2),
		  },
}));

export default function UserCreateStepOne() {
	const { setStep, updateUserForm, userForm, handleInputChange } = useContext(multiStepContext);	
	const classes = useStyles();
	
	return(
		<div>
			<Card className={classes.root}>
			<CardContent>
			<div>
				<TextField label="First Name" value={userForm.firstName} 
				onChange={handleInputChange} margin="normal" name="firstName" variant="outlined" color="secondary" />
			</div>

			<div>
				<TextField label="Last Name" value={userForm.lastName} 
				onChange={handleInputChange} margin="normal" name="lastName" variant="outlined" color="secondary" />
			</div>

			<div>
				<TextField label="Contact Number" name="contactNumber" value={userForm.contactNumber}  onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
				<TextField label="Email" name="email" value={userForm.email} onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>

			<div>
			<FormControl className={classes.formControl}>
		        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
		        	<Select
			          labelId="demo-simple-select-label"
			          id="demo-simple-select"
			          name="userType"
			          value={(userForm.userType) ? (userForm.userType) : ''}
			          onChange={(e) => updateUserForm({ ...userForm, userType: e.target.value }) }
			        >
				          <MenuItem value='admin'>Admin</MenuItem>
				          <MenuItem value='manager'>Manager</MenuItem>
				          <MenuItem value='staff'>Staff</MenuItem>
		        	</Select>
		    </FormControl>
			</div>

			<Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
			</CardContent>
			</Card>

		</div>
		)
}