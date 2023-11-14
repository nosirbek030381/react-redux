import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { icon } from '../constants';
import AuthService from '../service/auth';
import { registerUserFailure, registerUserStart, registerUserSuccess } from '../slice/auth';
import { Input } from '../ui';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const distpatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const registerHandler = async e => {
		e.preventDefault();
		distpatch(registerUserStart());
		const user = { username: name, email, password };
		try {
			const response = await AuthService.userRegister(user);
			console.log(response);
			distpatch(registerUserSuccess());
		} catch (error) {
			distpatch(registerUserFailure());
		}
	};

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img className='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>

					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						disabled={isLoading}
						onClick={registerHandler}
						type='submit'
					>
						{isLoading ? 'Loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	);
};

export default Register;
