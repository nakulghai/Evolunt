import reducer from './dataReducer';

describe('dataReducer Function', () => {
  it('should add data for add data action', () => {
  	const payload = {
  		email: "nakulghai@rediffmail.com",
  		firstName: "Nakul",
  		id: "jlvaholr",
  		lastName: "Ghai",
  		phoneNumber: "3443434",
  		radio: "active"
  	}
  	const action = {
  		type: 'ADD_DATA',
  		payload
  	}
  	expect(reducer([],action)).toEqual([payload]);	  
  })

  it('should delete data for delete data action', () => {
  	const payload = {
  		email: "nakulghai@rediffmail.com",
  		firstName: "Nakul",
  		id: "1",
  		lastName: "Ghai",
  		phoneNumber: "3443434",
  		radio: "active"
  	}
  	const action = {
  		type: 'DELETE_DATA',
  		id: "1"
  	}
  	expect(reducer([payload],action)).toEqual([]);	  
  })

  it('should edit data for edit data action', () => {
  	const payload = {
  		email: "nakulghai@rediffmail.com",
  		firstName: "Nakul",
  		id: "1",
  		lastName: "Ghai",
  		phoneNumber: "3443434",
  		radio: "active"
  	}

  	const editedPayload = {
  		email: "nakulghai@rediffmail.com",
  		firstName: "Rahul",
  		id: "1",
  		lastName: "Jain",
  		phoneNumber: "3443434",
  		radio: "active"
  	}
  	const action = {
  		type: 'EDIT_DATA',
  		payload: editedPayload
  	}
  	expect(reducer([payload],action)).toEqual([editedPayload]);	  
  })
})