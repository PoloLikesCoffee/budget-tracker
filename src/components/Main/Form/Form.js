import React, { useState, useContext } from 'react';
import {
	TextField,
	Grid,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { BudgetTrackerContext } from '../../../context/context';
import {
	incomeCategories,
	expenseCategories,
} from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import CustomSnackbar from '../../Snackbar/Snackbar';

const initialState = {
	amount: '',
	category: '',
	type: 'Income',
	date: formatDate(new Date()),
};

const Form = () => {
	const [formData, setFormData] = useState(initialState);
	const { addTransaction } = useContext(BudgetTrackerContext);
	const [open, setOpen] = useState(false);

	const createTransaction = () => {
		if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-'))
			return;

		const transaction = {
			...formData,
			amount: Number(formData.amount),
			id: uuidv4(),
		};
		setOpen(true);
		addTransaction(transaction);
		setFormData(initialState);
	};

	const selectedCategories =
		formData.type === 'Income' ? incomeCategories : expenseCategories;

	return (
		<Grid container spacing={2}>
			<CustomSnackbar open={open} setOpen={setOpen} />
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(event) =>
							setFormData({ ...formData, type: event.target.value })
						}
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(event) =>
							setFormData({ ...formData, category: event.target.value })
						}
					>
						{selectedCategories.map((category) => (
							<MenuItem key={category.type} value={category.type}>
								{category.type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					label="Amount"
					fullWidth
					value={formData.amount}
					onChange={(event) =>
						setFormData({ ...formData, amount: event.target.value })
					}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="date"
					label="Date"
					fullWidth
					value={formData.date}
					onChange={(event) =>
						setFormData({ ...formData, date: formatDate(event.target.value) })
					}
				/>
			</Grid>
			<div className="button">
				<Button onClick={createTransaction}>
					<div className="button-color">Create</div>
				</Button>
			</div>
		</Grid>
	);
};

export default Form;
