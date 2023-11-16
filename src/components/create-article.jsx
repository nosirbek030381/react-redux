import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArticleService } from '../service/article';
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/articles';
import { ArticleForm } from './';

const CreateArticle = props => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [body, setBody] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
			<h1 className='fs-2'>Create Article</h1>
			<div className='mx-auto w-75'>
				<ArticleForm {...formProps} />
			</div>
		</div>
	);
};

export default CreateArticle;
