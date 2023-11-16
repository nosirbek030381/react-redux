import { Input, TextArea } from '../ui';

const ArticleForm = props => {
	const { title, setTitle, description, setDescription, body, setBody } = props;
	return (
		<div>
			<form>
				<Input label={'Title'} state={title} setState={setTitle} />
				<TextArea label={'Descripton'} state={description} setState={setDescription} />
				<TextArea label={'Body'} state={body} setState={setBody} height={'200px'} />
				<button className='w-100 btn btn-lg btn-primary mt-1' type='submit'>
					Create
				</button>
			</form>
		</div>
	);
};

export default ArticleForm;
