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
			<button onClick={onClick}>
				{button}
			</button>
		</div>
		);
}

export default Button;