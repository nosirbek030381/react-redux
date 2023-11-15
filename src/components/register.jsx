import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { icon } from '../constants';
import { signUserStart } from '../slice/auth';
import { Input } from '../ui';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const registerHandler = e => {
		e.preventDefault();
		dispatch(signUserStart());
	};

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form action=''>
					<img src={icon} className='mb-4' alt='Icon' width={72} height={57} />
					<h1 className='h3 mb-3 fw-normal mt-1'>Please register</h1>

					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-1'
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
