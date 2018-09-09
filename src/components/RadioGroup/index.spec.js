import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import RadioGroup from './index';

const RADIO_OPTIONS = [
  {
    id: "active",
    label: "Active"
  },
  {
    id: "inactive",
    label: "Inactive"
  }
]

const wrapper = shallow(<RadioGroup 
						      onChange={() => {}}
					        radioOptions={RADIO_OPTIONS}
					        showError={true}
					        value="active"
					        errorMessage="Please enter atleast one radio button"
						/>);

describe('RadioGroup Component', () => {
  it('renders Error if showError is trur', () => {
    expect(wrapper.find('span').text()).toEqual('Please enter atleast one radio button')
  })
})