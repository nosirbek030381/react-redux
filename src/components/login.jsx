import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { icon } from '../constants';
import AuthService from '../service/auth';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import { Input } from '../ui';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const signInHandler = async e => {
		e.preventDefault();
		dispatch(signUserStart());
		const user = { email, password };

		try {
			const res = await AuthService.userLogin(user);
			console.log(res);

			dispatch(signUserSuccess());
		} catch (error) {
			dispatch(signUserFailure());
		}
	};

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please login</h1>

					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						onClick={signInHandler}
						disabled={isLoading}
						type='submit'
					>
						{isLoading ? 'Loading...' : 'Login'}
					</button>
				</form>
			</main>
		</div>
	);
};

export default Login;
