const incomeColors = [
	'#036666',
	'#14746f',
	'#248277',
	'#358f80',
	'#469d89',
	'#56ab91',
	'#67b99a',
	'#78c6a3',
	'#88d4ab',
];
const expenseColors = [
	'#a14747',
	'#cf4f4f',
	'#ea7070',
	'#ed8f8f',
	'#f2a1a1',
	'#fbc1c1',
	'#fad4d4',
	'#fce3e3',
	'#ffeded',
];

export const incomeCategories = [
	{ type: 'Salary', amount: 0, color: incomeColors[0] },
	{ type: 'Extra income', amount: 0, color: incomeColors[1] },
	{ type: 'Investments', amount: 0, color: incomeColors[2] },
	{ type: 'Deposits', amount: 0, color: incomeColors[3] },
	{ type: 'Lottery', amount: 0, color: incomeColors[4] },
	{ type: 'Gifts', amount: 0, color: incomeColors[5] },
	{ type: 'Business', amount: 0, color: incomeColors[6] },
	{ type: 'Savings', amount: 0, color: incomeColors[7] },
	{ type: 'Rental income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
	{ type: 'Rent & House', amount: 0, color: expenseColors[0] },
	{ type: 'Auto & Transport', amount: 0, color: expenseColors[1] },
	{ type: 'Clothes', amount: 0, color: expenseColors[2] },
	{ type: 'Travel', amount: 0, color: expenseColors[3] },
	{ type: 'Food', amount: 0, color: expenseColors[4] },
	{ type: 'Shopping', amount: 0, color: expenseColors[5] },
	{ type: 'Entertainment', amount: 0, color: expenseColors[6] },
	{ type: 'Phone', amount: 0, color: expenseColors[7] },
	{ type: 'Fitness', amount: 0, color: expenseColors[8] },
];

export const resetCategories = () => {
	incomeCategories.forEach((c) => (c.amount = 0));
	expenseCategories.forEach((c) => (c.amount = 0));
};
