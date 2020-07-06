import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function DisplayData() {

	const { finalData } = useContext(multiStepContext);

	return (

			<div>
			<TableContainer style={{display:'flex', justifyContent: 'center'}}>
			<Table border="1" style={{width:'70%', justifyContent:'center'}} size="small" aria-label="caption table">
				<TableHead>
					<TableRow style={{backgroundColor:'#16a085', color: 'aliceblue'}}>
						<TableCell> First Name </TableCell>
						<TableCell> Last Name </TableCell>
						<TableCell> Contact </TableCell>
						<TableCell> Email  </TableCell>
						<TableCell> Country </TableCell>
						<TableCell> District </TableCell>
						<TableCell> City </TableCell>
						<TableCell> Landmark </TableCell>
						<TableCell> ZipCode </TableCell>
					</TableRow>
				</TableHead>
			<TableBody>
				{finalData.map((data) => (

					<TableRow key={data.email}>
						<TableCell>{data.firstName}</TableCell>
						<TableCell>{data.lastName}</TableCell>
						<TableCell>{data.contactNumber}</TableCell>
						<TableCell>{data.email}</TableCell>
						<TableCell>{data.country}</TableCell>
						<TableCell>{data.district}</TableCell>
						<TableCell>{data.city}</TableCell>
						<TableCell>{data.landmark}</TableCell>
						<TableCell>{data.postalCode}</TableCell>
					</TableRow>

				))}
			</TableBody>
			</Table>
			</TableContainer>
			</div>
		)
		
	}
