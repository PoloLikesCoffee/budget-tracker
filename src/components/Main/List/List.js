import React, { useContext } from 'react';
import {
	List as MUIList,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	ListItemSecondaryAction,
	IconButton,
	Slide,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { BudgetTrackerContext } from '../../../context/context';

const List = () => {
	const { deleteTransaction, transactions } = useContext(BudgetTrackerContext);

	return (
		<MUIList dense={false} className="list">
			{transactions.map((transaction) => (
				<Slide
					direction="down"
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}
				>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								style={
									transaction.type === 'Income'
										? { color: '#ffffff', backgroundColor: '#14746f' }
										: { color: '#ffffff', backgroundColor: '#cf4f4f' }
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.category}
							secondary={`JP¥ ${transaction.amount}・${transaction.date}`}
						/>
						<ListItemSecondaryAction>
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => deleteTransaction(transaction.id)}
							>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
};

export default List;
