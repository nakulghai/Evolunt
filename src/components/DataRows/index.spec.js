import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import DataRows from './index';

const wrapper = shallow(<DataRows 
							data={[{firstName:"a",lastName:"b",email:"x",phoneNumber:"1",status:"active"}]}
				            onDelete={() => {}}
				            onEdit={() => {}}
				            editFlag={true}
				            editSubmitButton={() => {}}
						/>);

	describe('DataRows Component', () => {
	  it('renders DataRows', () => {
	  	expect(wrapper).toExist;	  
	  })

})