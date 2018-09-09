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
		<div>
			<label htmlFor={id}>
				{label}
			</label>
			<input
				onBlur={handleBlur}
				onChange={handleChange}
				type="text"
				id={id}
				name={name}
				value={value}				
			/>
			{
			showError && 
				<span>
					{errorMessage}
				</span>
			}
		</div>
		);
}

export default TextBox;