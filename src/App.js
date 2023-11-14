import { Route, Routes } from 'react-router-dom';
import { Login, Main, Navbar, Register } from './components';

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/main' element={<Main />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
