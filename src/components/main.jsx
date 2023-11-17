import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleService } from '../service/article';
import { getArticlesStart, getArticlesSuccess } from '../slice/articles';
import { Loader } from '../ui';
import ArticleCard from './article-card';

const Main = () => {
	const dispatch = useDispatch();
	const { articles, isLoading } = useSelector(state => state.article);

	const getArticle = async () => {
		dispatch(getArticlesStart());
		try {
			const response = await ArticleService.getArticles();
			dispatch(getArticlesSuccess(response.articles));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticle();
	}, []);

	return (
		<div>
			<div className='album py-5 '>
				<div className='container'>
					{isLoading && <Loader />}
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{articles.map(item => (
							<ArticleCard item={item} getArticle={getArticle} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
