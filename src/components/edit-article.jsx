import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ArticleService } from '../service/article';
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
} from '../slice/articles';
import ArticleForm from './form';

const EditArticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [body, setBody] = useState('');
	const dispatch = useDispatch();
	const { slug } = useParams();

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleDetailStart());
			try {
				const response = await ArticleService.getArticleDetail(slug);
				setTitle(response.article.title);
				setDescription(response.article.description);
				setBody(response.article.body);
				dispatch(getArticleDetailSuccess(response.article));
			} catch (error) {
				dispatch(getArticleDetailFailure());
			}
		};
		getArticleDetail();
	}, []);

	const formSumbit = async () => {};

	const formProps = { title, setBody, setDescription, setTitle, body, description, formSumbit };

	return (
		<div className='text-center'>
			<h1 className='fs-2'>Edit Article</h1>
			<div className='mx-auto w-75'>
				<ArticleForm {...formProps} />
			</div>
		</div>
	);
};

export default EditArticle;
