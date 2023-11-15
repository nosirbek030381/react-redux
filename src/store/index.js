import { configureStore } from '@reduxjs/toolkit';
import ArticleReduser from '../slice/articles';
import AuthReducer from '../slice/auth';

export default configureStore({
	reducer: {
		auth: AuthReducer,
		article: ArticleReduser,
	},
	devTools: process.env.NODE_ENV !== 'production',
});
