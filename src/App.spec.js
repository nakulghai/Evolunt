import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />)

	describe('App Component', () => {
		
	  it('renders App', () => {
	    expect(wrapper.toExists);
	  });
	  
});