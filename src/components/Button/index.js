import React, { Components } from 'react';

const Button = ({
	onSubmit
}) => {
	const onClick = () => {
		onSubmit();
	}
	return(
		<div>
			<button onClick={onSubmit}>
				Submit
			</button>
		</div>
		);
}

export default Button;