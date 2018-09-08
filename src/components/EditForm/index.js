import React,{Component} from 'react';

class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: props.defaultFirstName,
			lastName: props.defaultLastName,
			email: props.defaultEmail,
			phoneNumber: props.defaultPhoneNumber,
			status: props.defaultStatus
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = () => {
		const obj = {
	      id: this.props.id,
	      firstName: this.state.firstName,
	      lastName: this.state.lastName,
	      email: this.state.email,
	      phoneNumber: this.state.phoneNumber,
	      radio: this.state.status
	    }
	    this.props.editSubmitButton(obj);
	}

	render() {
		return(
			<table>
				<tr>
					<td>
						<input
							id="firstName"
							defaultValue={this.props.defaultFirstName} 
							onChange={this.handleChange}
						/>			
					</td>
					<td>
						<input
							id="lastName"
							defaultValue={this.props.defaultLastName} 
							onChange={this.handleChange}
						/>			
					</td>
					<td>
						<input
							id="email"
							defaultValue={this.props.defaultEmail} 
							onChange={this.handleChange}
						/>			
					</td>
					<td>
						<input
							id="phoneNumber"
							defaultValue={this.props.defaultPhoneNumber} 
							onChange={this.handleChange}
						/>			
					</td>
					<td>
						<input
							id="status"
							defaultValue={this.props.defaultStatus} 
							onChange={this.handleChange}
						/>			
					</td>
					<td>
					<button onClick={this.handleSubmit}>
						Submit
					</button>
					</td>
				</tr>
			</table>			
			);
	}
}

export default EditForm;