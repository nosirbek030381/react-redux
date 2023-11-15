import axios from './api';

const AuthService = {
	async userRegister(user) {
		const res = await axios.post('/users');

		return res;
	},
	async userLogin() {},
	async getUser() {},
};

export default AuthService;
