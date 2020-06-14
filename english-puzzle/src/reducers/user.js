const initialState = {  
  name: 'Василий',
  surname: 'Реактов',
  age: 27,
  isAuthorization: true
  
}
/* 
export function userReducer(state = initialState) {
  return state
} */

export function userstate(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      // TODO
      return {}

    case 'LOGIN_SUCCESS':
      // TODO
      return {}

    case 'LOGIN_FAIL':
      // TODO
      return {}

    case 'LOGOUT_SUCCESS':
      // TODO
      return {}

    default:
      return state
  }
}