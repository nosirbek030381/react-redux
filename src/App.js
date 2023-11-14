import { Route, Router } from 'react-router-dom';
import { Login, Main, Navbar, Register } from './components';

const App = () => {
	return (
		<div>
			<Navbar />
			<Router>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/main' component={Main} />
			</Router>
		</div>
	);
};

export default App;
