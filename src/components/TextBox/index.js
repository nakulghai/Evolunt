import React from 'react';

const TextBox = ({
	id,
	label,
	name,
	onChange,
	onBlur,
	showError,
	value,
	errorMessage
}) => {
	const handleChange = (event) => {
		onChange(event.target.value, id);
	}
	const handleBlur = (event) => {
		onBlur(event.target.value, id);
	}	
	return(
		<div className="input-field col s6">						
			<input
				className="validate"
				onBlur={handleBlur}
				onChange={handleChange}
				type="text"
				id={id}
				name={name}
				value={value}				
			/>
			<label className="active" htmlFor={id}>
				{label}
			</label>			
			{
			showError && 
				<span className="helper-text" data-error="wrong">
					{errorMessage}
				</span>
			}
		</div>
		);
}

export default TextBox;