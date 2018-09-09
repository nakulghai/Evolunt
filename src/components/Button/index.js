import React, { Component } from 'react';

const Button = ({
	button,
	onSubmit
}) => {
	const onClick = () => {
		onSubmit();
	}
	return(
		<div>
			<button onClick={onSubmit}>
				{button}
			</button>
		</div>
		);
}

export default Button;