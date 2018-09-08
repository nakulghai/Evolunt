import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

//components
import TextBox from './../TextBox';
import RadioGroup from './../RadioGroup';
import Button from './../Button';
import DataRows from './../DataRows';

//Action
import { addData, deletData, editData } from './../../Actions';

//constants
import { RADIO_OPTIONS } from './../../constants';

//validations
import onBlurValidations from './../Validations';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "firstNameValid": "NOT-TOUCHED",
      "lastNameValid": "NOT-TOUCHED",
      "emailValid": "NOT-TOUCHED",
      "phoneNumberValid": "NOT-TOUCHED",
      "radioValid": "NOT-TOUCHED",
      "editFlag": false
    }
  }

  handleChange = (value, id) => {
    const key = id || "radio";
    this.setState({
      [key]: value
    });
    const valid = onBlurValidations(id, value);
    const state = `${key}Valid`;
    this.setState({[state]: valid});
  }

  handleBlur = (value, id) => {
    const valid = onBlurValidations(id, value);
    const state = `${id}Valid`;
    this.setState({[state]: valid});
  }

  handleSubmit = () => {
    const errors = this.showErrorsOnSubmit();
    if (errors > 0) {
      return;
    }
    const payload = this.getPayload();
    this.props.addData(payload);
    console.log(this.props);
    this.resetForm();
  }

  showErrorsOnSubmit = () => {
    let errors = 0;
    if (this.state.firstNameValid !== true) {
      this.setState({firstNameValid: false});
      errors++;
    }
    if (this.state.lastNameValid !== true) {
      this.setState({lastNameValid: false});
      errors++;
    }
    if (this.state.emailValid !== true) {
      this.setState({emailValid: false});
      errors++;
    }
    if (this.state.phoneNumberValid !== true) {
      this.setState({phoneNumberValid: false});
      errors++;
    }
    if (!this.state.radio) {
      this.setState({radioValid: false});
      errors++;
    } 
    
    return errors;
  }

  getPayload = () => {
    return {
      id: uniqid(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      radio: this.state.radio
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      radio: '',
      "firstNameValid": "NOT-TOUCHED",
      "lastNameValid": "NOT-TOUCHED",
      "emailValid": "NOT-TOUCHED",
      "phoneNumberValid": "NOT-TOUCHED",
      "radioValid": "NOT-TOUCHED"
    });
  }

  handleEditSubmit = (editedData) => {
    this.props.editData(editedData);
    this.setState({editFlag: false});
  }

  deleteRow = (id) => {
    this.props.deletData(id);
  }

  editRow = (id) => {
    this.setState({editFlag: !this.state.editFlag});
  }

  render() {
    return (
      <div>
          <TextBox 
            label="First Name"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            id="firstName"
            name="firstName"
            showError={!this.state.firstNameValid}
            value={this.state.firstName || ''}            
          />
          <TextBox 
            label="Last Name"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            id="lastName"
            name="lastName"
            showError={!this.state.lastNameValid}
            value={this.state.lastName || ''}            
          />
          <TextBox 
            label="Email"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            id="email"
            name="email"
            showError={!this.state.emailValid}
            value={this.state.email || ''}            
          />
          <TextBox 
            label="Phone NUmber"
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            id="phoneNumber"
            name="phoneNumber"
            showError={!this.state.phoneNumberValid}
            value={this.state.phoneNumber || ''}            
          />
          <RadioGroup
            onChange={this.handleChange}
            radioOptions={RADIO_OPTIONS}
            showError={!this.state.radioValid}
            value={this.state.radio}
          />
          <Button 
            onSubmit={this.handleSubmit}
          />
          <DataRows 
            data={this.props.data}
            onDelete={this.deleteRow}
            onEdit={this.editRow}
            editFlag={this.state.editFlag}
            editSubmitButton={this.handleEditSubmit}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dataReducer
});

const mapDispatchToProps = dispatch => ({
 addData: (payload) => dispatch(addData(payload)),
 deletData: (payload) => dispatch(deletData(payload)),
 editData: (payload) => dispatch(editData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
