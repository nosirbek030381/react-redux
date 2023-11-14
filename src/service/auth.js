import axios from './api';

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/users', { user });

		return response.data;
	},
	async userLogin(user) {
		const res = await axios.post('/users/login', { user });

		return res.data;
	},
	async getUser() {},
};

export default AuthService;
