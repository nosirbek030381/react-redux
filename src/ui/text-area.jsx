const TextArea = ({ label, state, setState, height = '100px' }) => {
	return (
		<div>
			<div className='form-floating mt-1'>
				<textarea
					className='form-control'
					placeholder={label}
					id='floatingTextarea2'
					style={{ height: height }}
					onChange={e => setState(e.target.value)}
				></textarea>
				<label htmlFor='floatingTextarea2'>{label}</label>
			</div>
		</div>
	);
};

export default TextArea;
