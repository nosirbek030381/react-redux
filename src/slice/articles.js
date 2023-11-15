import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	articles: [],
	error: null,
};

const articlesSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		getArticlesStart: state => {
			state.isLoading = true;
		},
		getArticlesSuccess: (state, action) => {
			state.isLoading = false;
			state.articles = action.payload;
		},
		getArticlesFailure: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } = articlesSlice.actions;
export default articlesSlice.reducer;
