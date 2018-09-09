import React, { Component } from 'react';
import Radio from './../Atoms/Radio';

class RadioGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.value
		}
	}
	handleClick = (id) => {
		this.setState({checked: id});
		this.props.onChange(id);
	}

	render() {
		const { radioOptions, showError, value} = this.props;
		return(
			<div>
				{
					radioOptions.map((radio,index) => {
						return (<Radio 
									id={radio.id}
									label={radio.label}
									onClick={this.handleClick}
									checked={this.state.checked}
									value={value}
									key={index}
								/>);
					})
				}
				{
				showError && 
					<span>
						{this.props.errorMessage}
					</span>
				}
			</div>
			);
		}
}

export default RadioGroup;