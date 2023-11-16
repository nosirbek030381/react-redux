import axios from './api';

export const ArticleService = {
	async getArticles() {
		const { data } = await axios.get('/articles');
		return data;
	},
	async getArticleDetail(slug) {
		const { data } = await axios.get(`/article/${slug}`);
		return data;
	},
};
