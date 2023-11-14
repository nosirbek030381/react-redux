import { Route, Routes } from 'react-router-dom';
import { Login, Main, Navbar, Register } from './components';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
};

export default App;
