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
		// LOGIN
		signUserStart: state => {
			state.isLoading = true;
		},
		signUserSuccess: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
		},
		signUserFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	signUserStart,
	registerUserStart,
	registerUserSuccess,
	registerUserFailure,
	signUserSuccess,
	signUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
