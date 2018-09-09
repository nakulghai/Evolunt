import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextBox from './index';

//creating spy methods
const handleChange = sinon.spy();
const handleBlur = sinon.spy();

const wrapper = shallow(<TextBox 
		id="test-id"
		label="test-label"
		name="test-id"
		onChange={handleChange}
		onBlur={handleBlur}
		showError={false}
		value="test"
	/>)

	describe('TextBox Component', () => {
	  it('renders TextBox', () => {
	    expect(wrapper.find('label').text()).toEqual('test-label')
	  })

	  it('should call handleChange on change', () => {
	  	const inst = wrapper.instance();
	  	const event = {target: { value: "test" }}
	  	wrapper.find('#test-id').simulate('change',event);
	  	expect(handleChange.called);
	  })

	  it('should call handleBlur on blur event', () => {
	  	const inst = wrapper.instance();
	  	const event = {target: { value: "test" }}
	  	wrapper.find('#test-id').simulate('blur',event);
	  	expect(handleBlur.called);
	  })
  
})