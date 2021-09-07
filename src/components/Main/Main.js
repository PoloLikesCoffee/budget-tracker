import React, { useContext } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	Grid,
	Divider,
} from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import { BudgetTrackerContext } from '../../context/context';

const Main = ({ title }) => {
	const { balance } = useContext(BudgetTrackerContext);

	return (
		<Card className="main-card">
			{/* <CardHeader title="Budget Tracker" /> */}
			<CardContent>
				<Typography align="center" variant="h5">
					Total Balance JP¥ {balance}
				</Typography>
				<Divider style={{ margin: '15px' }} />
				<Form />
			</CardContent>

			<CardContent>
				<Divider style={{ margin: '15px' }} />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<List />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
