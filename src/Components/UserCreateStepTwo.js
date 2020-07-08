import React,  {useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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


export default function UserCreateStepTwo() {

	const { setStep,updateUserForm, userForm, handleInputChange } = useContext(multiStepContext);
	const classes = useStyles();

	return(
		<div>

			<Card className={classes.root}>
			<CardContent>

			<div>
			<FormControl className={classes.formControl}>
		        <InputLabel id="demo-simple-select-label">Department</InputLabel>
		        	<Select
			          labelId="demo-simple-select-label"
			          id="demo-simple-select"
			          name="department"
			          value={(userForm.department) ? (userForm.department) : 'roads' }
			          onChange={(e) => updateUserForm({ ...userForm, department: e.target.value }) }
			        >
				          <MenuItem value='housing'>Housing</MenuItem>
				          <MenuItem value='roads'>Roads</MenuItem>
				          <MenuItem value='water-board'>Water Board</MenuItem>
		        	</Select>
		    </FormControl>
			</div>

			<div>
				<TextField label="City" value={userForm.city} name="city" onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
			</div>

			
			<div>
				<TextField label="District" value={userForm.district} name="district" onChange={handleInputChange} margin="normal" variant="outlined" color="secondary" />
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