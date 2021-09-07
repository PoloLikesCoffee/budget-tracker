const incomeColors = [
	'#6247aa',
	'#7251b5',
	'#815ac0',
	'#9163cb',
	'#a06cd5',
	'#b185db',
	'#c19ee0',
	'#d2b7e5',
	'#dac3e8',
];
const expenseColors = [
	'#ffea00',
	'#ffdd00',
	'#ffd000',
	'#ffc300',
	'#ffb700',
	'#ffaa00',
	'#ffa200',
	'#ff9500',
	'#ff8800',
	'#ff7b00',
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
	{ type: 'Rent', amount: 0, color: expenseColors[0] },
	{ type: 'Auto & Transport', amount: 0, color: expenseColors[1] },
	{ type: 'Clothes', amount: 0, color: expenseColors[2] },
	{ type: 'Travel', amount: 0, color: expenseColors[3] },
	{ type: 'Food', amount: 0, color: expenseColors[4] },
	{ type: 'Shopping', amount: 0, color: expenseColors[5] },
	{ type: 'House', amount: 0, color: expenseColors[6] },
	{ type: 'Entertainment', amount: 0, color: expenseColors[7] },
	{ type: 'Phone', amount: 0, color: expenseColors[8] },
	{ type: 'Fitness', amount: 0, color: expenseColors[9] },
];

export const resetCategories = () => {
	incomeCategories.forEach((c) => (c.amount = 0));
	expenseCategories.forEach((c) => (c.amount = 0));
};
