import { useState } from 'react';
import { ArticleForm } from './';

const CreateArticle = props => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [body, setBody] = useState('');
	const formProps = { title, setBody, setDescription, setTitle, body, description };

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
