import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import List from './List';

const wrapper = shallow(<List 
							firstName="test"
							lastName="test"
							email="test"
							phoneNumber="test"
							status="test"
							id="test"
							onDelete= { () => {} }
							onEdit= { () => {} }
							defaultFirstName="Nakul"
							defaultLastName="Ghai"
							defaultEmail="nakulghai@rediffmail.com"
							defaultPhoneNumber="1234567890"
							defaultStatus="active"
							id="test"
							editSubmitButton={ () => {} }
							editFlag={ true }
						/>);

	describe('List Component', () => {
	  it('renders List', () => {
	  	expect(wrapper).toExist;	  
	  });

	  it('firstName should be defaultValue', () => {
	  	expect(wrapper.state().firstName).toEqual("Nakul");
	  });

	  it('lastName should be defaultValue', () => {
	  	expect(wrapper.state().lastName).toEqual("Ghai");
	  });

	  it('email should be defaultValue', () => {
	  	expect(wrapper.state().email).toEqual("nakulghai@rediffmail.com");
	  });

	  it('phoneNumber should be defaultValue', () => {
	  	expect(wrapper.state().phoneNumber).toEqual("1234567890");
	  });
	 
})