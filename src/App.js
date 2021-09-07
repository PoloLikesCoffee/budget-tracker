import React from 'react';
import './scss/Style.scss';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	typography: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
	},
});

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<div>
				<Grid
					container
					spacing={0}
					alignItems="center"
					justifyContent="center"
					style={{ height: '100vh' }}
				>
					<Grid
						item
						xs={12}
						sm={3}
						style={{ margin: '16px' }}
						className="mobile"
					>
						<Details title="Income" />
					</Grid>
					<Grid item xs={12} sm={3} style={{ margin: '16px' }} className="main">
						<Main />
					</Grid>
					<Grid
						item
						xs={12}
						sm={3}
						style={{ margin: '16px' }}
						className="desktop"
					>
						<Details title="Income" />
					</Grid>
					<Grid item xs={12} sm={3} style={{ margin: '16px' }} className="last">
						<Details title="Expense" />
					</Grid>
				</Grid>
			</div>
		</MuiThemeProvider>
	);
};

export default App;
