import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	Divider,
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

const Details = ({ title }) => {
	const { total, chartData } = useTransactions(title);

	return (
		<Card className={title === 'Income' ? 'income' : 'expense'}>
			<CardHeader title={title} />
			<Divider style={{ margin: '0 10px' }} />
			<CardContent style={{ padding: '0 0 16px 0' }}>
				<Typography variant="h6" style={{ padding: '16px' }}>
					JP¥ {total}
				</Typography>
				<Doughnut data={chartData} />
			</CardContent>
		</Card>
	);
};

export default Details;
