export const addData = (payload) => (dispatch) => {
 dispatch({
  type: 'ADD_DATA',
  payload: payload
 })
}

export const deletData = (id) => (dispatch) => {
 dispatch({
  type: 'DELETE_DATA',
  id
 })
}

export const editData = (payload) => (dispatch) => {
 dispatch({
  type: 'EDIT_DATA',
  payload
 })
}