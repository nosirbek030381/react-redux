import { useState } from 'react';
import { icon } from '../constants';
import { Input } from '../ui';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form action=''>
					<img src={icon} className='mb-3' alt='Icon' width={72} height={57} />
					<h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

					<Input label={'Email address'} type={'email'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button className='w-100 btn btn-lg btn-primary mt-1' type='submit'>
						Sumbit
					</button>
				</form>
			</main>
		</div>
	);
};

export default Login;
