import axios from './api';

export const ArticleService = {
	async getArticles() {
		const { data } = await axios.get('/articles');
		return data;
	},
};
