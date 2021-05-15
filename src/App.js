import './App.css';
import Table from './table2';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route path="/user">
					<Table />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
