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
		<p>
			<label htmlFor={id}>						
				<input
					className="with-gap"
					checked={checked === id && value === id}
					id={id} 
					type="radio"
					onClick={handleClick}
				/>
				<span>{label}</span>
			</label>
		</p>
		);
}

export default Radio;