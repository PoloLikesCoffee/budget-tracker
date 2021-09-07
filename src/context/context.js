import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
	{
		amount: 7500,
		category: 'Shopping',
		type: 'Expense',
		date: '2021-08-31',
		id: 'de836a17-b10b-4a5f-b009-9526698cd5ad',
	},
	{
		amount: 50000,
		category: 'Travel',
		type: 'Expense',
		date: '2021-08-09',
		id: '90ada90b-64cb-44ba-a5ed-c69d1da3e628',
	},
	{
		amount: 10000,
		category: 'Deposits',
		type: 'Income',
		date: '2021-08-05',
		id: '0a4b17ad-2779-4a6f-899c-f29d389e2a39',
	},
	{
		amount: 120,
		category: 'Gifts',
		type: 'Income',
		date: '2021-09-23',
		id: '4dca4a18-d43c-4089-a943-ce89a7bdc8bc',
	},
	{
		amount: 2000,
		category: 'Investments',
		type: 'Income',
		date: '2021-09-08',
		id: '000e72f3-caea-4df1-8d83-cbe5c72ac3ca',
	},
];

export const BudgetTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState);

	// Action Creators
	const deleteTransaction = (id) =>
		dispatch({ type: 'DELETE_TRANSACTION', payload: id });
	const addTransaction = (transaction) =>
		dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

	const balance = transactions.reduce((acc, cur) => {
		return cur.type === 'Expense' ? acc - cur.amount : acc + cur.amount;
	}, 0);

	return (
		<BudgetTrackerContext.Provider
			value={{
				deleteTransaction,
				addTransaction,
				transactions,
				balance,
			}}
		>
			{children}
		</BudgetTrackerContext.Provider>
	);
};
