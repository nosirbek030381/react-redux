import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ArticleDetail, CreateArticle, Login, Main, Navbar, Register } from './components';
import { getItem } from './helpers/storage';
import AuthService from './service/auth';
import { signUserSuccess } from './slice/auth';

const App = () => {
	const dispatch = useDispatch();

	const getUser = async () => {
		try {
			const response = await AuthService.getUser();
			dispatch(signUserSuccess(response.user));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = getItem('token');
		if (token) {
			getUser();
		}
	}, []);

	return (
		<div>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='article/:slug' element={<ArticleDetail />} />
					<Route path='/create-article' element={<CreateArticle />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
