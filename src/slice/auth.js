import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../helpers/storage';

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
		signUserSuccess: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
			setItem('token', action.payload.token);
		},
		signUserFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { signUserStart, signUserSuccess, signUserFailure } = authSlice.actions;
export default authSlice.reducer;
