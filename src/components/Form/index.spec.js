import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import React from 'react';

import Form from './index';


const initialState = [];
const mockStore = configureStore();

 describe('Form Component', () => {
  let wrapper;
  let store;
 
   beforeEach(() => {
     store = mockStore(initialState)
  	 wrapper = shallow(<Form store={store}/>)
   })

   it("renders", () => {
   	expect(wrapper.toExist);
   })   
})