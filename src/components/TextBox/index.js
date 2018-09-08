import React, { Component } from 'react';

const TextBox = ({
	id,
	label,
	name,
	onChange,
	onBlur,
	showError,
	value
}) => {
	const handleChange = (event) => {
		onChange(event.target.value, id);
	}
	const handleBlur = (event) => {
		onBlur(event.target.value, id);
	}
	const showErrorFlag = !showError && showError !== 'NOT-TOUCHED';
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
					Error
				</span>
			}
		</div>
		);
}

export default TextBox;