import { useSelector } from 'react-redux';
import { Input, TextArea } from '../ui';

const ArticleForm = props => {
	const { isLoading } = useSelector(state => state.article);
	const { title, setTitle, description, setDescription, body, setBody, formSumbit } = props;

	return (
		<div>
			<form onSubmit={formSumbit}>
				<Input label={'Title'} state={title} setState={setTitle} />
				<TextArea label={'Descripton'} state={description} setState={setDescription} />
				<TextArea label={'Body'} state={body} setState={setBody} height={'200px'} />
				<button className='w-100 btn btn-lg btn-primary mt-1' disabled={isLoading} type='submit'>
					{isLoading ? 'Loading...' : 'Create'}
				</button>
			</form>
		</div>
	);
};

export default ArticleForm;
