export default (state = [], action) => {
 switch (action.type) {
  case 'ADD_DATA':
   return [
   	...state,
    action.payload
   ]
   case 'DELETE_DATA':
   return state.filter((data) => {
   	return data.id !== action.id;
   })
   case 'EDIT_DATA':
    const editIndex = state.findIndex((data) => {
      return action.payload.id === data.id;
    });
    const newState = state.map((data, index) => {
      if (editIndex === index) {
        return action.payload;
      }
      return data;
    })
    return newState;
  default:
   return state
 }
}