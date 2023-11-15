import { useState } from 'react';
import { useSelector } from 'react-redux';
import { icon } from '../constants';
// import AuthService from '../service/auth';
// import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import { Input } from '../ui';
// import ValidationError from './validation-error';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const loginHandler = async e => {
		e.preventDefault();
		// dispatch(signUserStart());
		// const user = { email, password };

		// try {
		// 	const response = await AuthService.userLogin(user);
		// 	console.log(response);
		// 	dispatch(signUserSuccess());
		// } catch (error) {
		// 	dispatch(signUserFailure());
		// }
	};

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form action=''>
					<img src={icon} className='mb-3' alt='Icon' width={72} height={57} />
					<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
					{/* <ValidationError /> */}

					<Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-1'
						disabled={isLoading}
						onClick={loginHandler}
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
