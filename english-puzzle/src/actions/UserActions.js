export function signUp(userData) {
  return dispatch => {
    dispatch({
      type: 'SIGN_UP_REQUEST'   
    })  
    
    const createUser = async user => {
      const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const content = await rawResponse.json();
      console.log('create user');
      console.log(content);
      
      if ("error" in content) {
        dispatch({
          type: 'SIGN_UP_FAIL',
          payload: content.error.errors[0]['message'],
        })        
      } else {
        dispatch({
          type: 'SIGN_UP_SUCCESS',
          password: user.password,
          payload: content,
        })
      }
    };

    createUser(userData).catch((e) => console.log(e));

  }
}
 
export function signIn(userData) {
  return dispatch => {
    dispatch({
      type: 'SIGN_IN_REQUEST'
    })  
        
    const getToken = async user => {
      const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const content = await rawResponse.json();
      console.log('gettoken');
      console.log(content);

      if ("error" in content) {
        dispatch({
          type: 'SIGN_IN_FAIL',
          payload: content.error.errors[0]['message'],
        })        
      } else {
        dispatch({
          type: 'SIGN_IN_SUCCESS',
          password: user.password,
          payload: content,
        })
      }
    }

    getToken(userData).catch((e) => console.log(e));

  }
}

export function logout() {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}
  


 