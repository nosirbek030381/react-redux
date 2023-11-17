import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleService } from '../service/article';
import {
	getArticleDetailFailure,
	getArticleDetailStart,
	getArticleDetailSuccess,
	postArticleFailure,
	postArticleStart,
	postArticleSuccess,
} from '../slice/articles';
import ArticleForm from './form';

const EditArticle = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [body, setBody] = useState('');
	const dispatch = useDispatch();
	const { slug } = useParams();
	const navigate = useNavigate();

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

	const formSumbit = async e => {
		e.preventDefault();
		const article = { title, description, body };
		dispatch(postArticleStart());
		try {
			await ArticleService.postArticle(article);
			dispatch(postArticleSuccess());
			navigate('/');
		} catch (error) {
			dispatch(postArticleFailure());
		}
	};

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
