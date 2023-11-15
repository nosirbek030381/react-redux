import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signUserStart: state => {
			state.isLoading = true;
		},
		signUserSuccess: state => {},
		signUserFailure: state => {},
	},
});

export const { signUserStart, signUserSuccess, signUserFailure } = authSlice.actions;
export default authSlice.reducer;
