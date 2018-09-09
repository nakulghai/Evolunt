import React from 'react';

const Radio = ({
	checked,
	id,
	label,
	onClick,
	value
}) => {
	const handleClick = (event) => {
		onClick(id);
	}
	return(
		<div>
			<label htmlFor={id}>
				{label}
			</label>
			<input
				checked={checked === id && value === id}
				id={id} 
				type="radio"
				onClick={handleClick}
			/>
		</div>
		);
}

export default Radio;