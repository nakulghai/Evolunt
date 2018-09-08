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
					radioOptions.map((radio,key) => {
						return (<Radio 
									id={radio.id}
									label={radio.label}
									onClick={this.handleClick}
									checked={this.state.checked}
									value={value}
								/>);
					})
				}
				{
				showError && 
					<span>
						Error
					</span>
				}
			</div>
			);
		}
}

export default RadioGroup;