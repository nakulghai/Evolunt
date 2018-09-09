import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './index';

const handleClick = sinon.spy();
const wrapper = shallow(<Button 
		button="test"
		onClick={handleClick}	
	/>)

	describe('Button Component', () => {
		
	  it('renders Button', () => {
	    expect(wrapper.find('button').text()).toEqual('test')
	  })

	  it('should call handleClick on click of button', () => {
	  	const inst = wrapper.instance();
	  	wrapper.find('button').simulate('click');
	  	expect(handleClick.called);  
	  })
	  
})