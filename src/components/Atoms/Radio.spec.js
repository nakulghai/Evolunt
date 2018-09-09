import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

//component
import Radio from './Radio';

//creating spy method
const handleClick = sinon.spy();

const wrapper = shallow(<Radio 
		checked={true}
		id="test"
		label="test-label"
		onClick={handleClick}
		value="active"
	/>)
describe('Radio Component', () => {
  it('renders label', () => {
    expect(wrapper.find('label').text()).toEqual('test-label')
  });

  it('should call handleClick on click radio button', () => {
  	const inst = wrapper.instance();
  	wrapper.find('#test').simulate('click');
  	expect(handleClick.called);  
  })
})