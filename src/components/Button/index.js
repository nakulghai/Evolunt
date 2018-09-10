import React from 'react';

const Button = ({
	button,
	onSubmit
}) => {
	const onClick = () => {
		onSubmit();
	}
	return(
		<div>
			<button
				className="btn waves-effect waves-light" 
				onClick={onClick}
			>
				{button}
			</button>
		</div>
		);
}

export default Button;