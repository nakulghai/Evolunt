import React, { Component } from 'react';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: props.defaultFirstName,
			lastName: props.defaultLastName,
			email: props.defaultEmail,
			phoneNumber: props.defaultPhoneNumber,
			status: props.defaultStatus,
			editFlag: false
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
	    this.setState({editFlag: false})
	}
	handleDelete = () => {
		this.props.onDelete(this.props.id);
	}

	handleEdit = () => {
		this.setState({editFlag: !this.state.editFlag})
	}
	render() {
		return(
			<div>
				<tr>
					<td>
						{ this.props.defaultFirstName }
					</td>
					<td>
						{ this.props.defaultLastName }
					</td>
					<td>
						{ this.props.defaultEmail }
					</td>
					<td>
						{ this.props.defaultPhoneNumber }
					</td>
					<td>
						{ this.props.defaultStatus }
					</td>
					<td>
						<button onClick={this.handleEdit}>Edit</button>
					</td>
					<td>
						<button onClick={this.handleDelete}>Delete</button>
					</td>
				</tr>
				{
					this.state.editFlag &&
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
				}	
			</div>
		);
	}
}

export default List;