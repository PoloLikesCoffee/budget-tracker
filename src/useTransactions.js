// custom hook

import { useContext } from 'react';
import { BudgetTrackerContext } from './context/context';
import {
	incomeCategories,
	expenseCategories,
	resetCategories,
} from './constants/categories';

const useTransactions = (title) => {
	resetCategories();
	const { transactions } = useContext(BudgetTrackerContext);
	// filtering out only the ones that I need (Income or Expense)
	const filteredTransactions = transactions.filter(
		(transaction) => transaction.type === title
	);
	// left only the transactions type income or expense
	// then get the total => sum of all the current value (amount) of the filtered transactions
	const total = filteredTransactions.reduce(
		(accumulator, currentValue) => (accumulator += currentValue.amount),
		0
	);
	// categories => income's categories (business, investments, ...) or categories => expense's categories (bills, car, ...)
	const categories = title === 'Income' ? incomeCategories : expenseCategories;

	console.log({ filteredTransactions, total, categories });

	// mapping through the filtered transactions and for each transaction, I need to find a category where it belongs to
	// for example, transaction 1 has a category 'car', so it belongs to 'car'
	filteredTransactions.forEach((transaction) => {
		// if transaction's category (transaction.category) => car (category.type) then that is the one
		const category = categories.find((c) => c.type === transaction.category);
		// then, I have to increment the amount from the found transaction's amount
		if (category) {
			category.amount += transaction.amount;
		}
	});

	// I have to remove the categories where the amount is 0
	const filteredCategories = categories.filter((c) => c.amount > 0);

	// finally, return the DATA for the chart
	const chartData = {
		datasets: [
			{
				data: filteredCategories.map((c) => c.amount),
				backgroundColor: filteredCategories.map((c) => c.color),
			},
		],
		labels: filteredCategories.map((c) => c.type),
	};
	return { total, chartData };
};

export default useTransactions;
