import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	articles: [],
	articleDetail: null,
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
			state.isLoading = false;
		},
		getArticleDetailStart: state => {
			state.isLoading = true;
		},
		getArticleDetailSuccess: (state, action) => {
			state.isLoading = false;
			state.articleDetail = action.payload;
		},
		getArticleDetailFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getArticlesStart,
	getArticlesSuccess,
	getArticlesFailure,
	getArticleDetailFailure,
	getArticleDetailSuccess,
	getArticleDetailStart,
} = articlesSlice.actions;
export default articlesSlice.reducer;
