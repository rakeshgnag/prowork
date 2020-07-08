import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { Button } from '@material-ui/core';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import './css/Progressbar.css';


export default function UserProgress() {
	const useStyles = makeStyles((theme) => ({
	  root: {
	    display: 'flex',
	  },
	  details: {
	    display: 'flex',
	    flexDirection: 'column',
	  },
	  content: {
	    flex: '1 0 auto',
	  },
	}));
	const classes = useStyles();
  	const theme = useTheme();

  	/* Data constants */
	const { finalData, setStep } = useContext(multiStepContext);

	/* Progress Bar */
	const Progress = ({done}) => {
		const [style, setStyle] =React.useState({});
		setTimeout( () => {
			const newStyle = {
				opacity : 1,
				width : `${done}%`
			}
			setStyle(newStyle);
		}, 1000);

		return (
			<div class="progress">
				<div class="progress-done" style={style}>
					{done}%
				</div>
			</div>
		)
	}

	return (

			<div>
			<Button variant="contained" onClick={() => setStep(1)} color="primary">Add More Users</Button>
			<br /><br />
			<Card className={classes.root}>
			<TableContainer style={{display:'flex', justifyContent: 'center'}}>
			<Table border="1" style={{width:'70%', justifyContent:'center'}} size="small" aria-label="caption table">
				<TableHead>
					<TableRow style={{backgroundColor:'#16a085', color: 'aliceblue'}}>
						<TableCell> Name </TableCell>
						<TableCell> Progress  </TableCell>
					</TableRow>
				</TableHead>
			<TableBody>
				{finalData.map((data) => (

					<TableRow key={data.email}>
						<TableCell>{data.firstName} {data.lastName}</TableCell>
						<TableCell><Progress done={data.percentage}/></TableCell>
					</TableRow>

				))}
			</TableBody>
			</Table>
			</TableContainer>
			</Card>
			</div>
		)
		
	}
