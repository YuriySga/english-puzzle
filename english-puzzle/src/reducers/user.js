const initialState = {  
  email: null,
  id: null,
  password: null,
  token: null,
  errorSignUp: false,
  errorSignIn: false,
  messageSignUp: '',
  messageSignIn: '',
  isAuthorization: false,
  isAuthenticated: false,
  isFetching: false,
}

export function userstate(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
      return { ...state,
        isFetching: true,
        errorSignUp: false,
      }

    case 'SIGN_UP_SUCCESS':
      return { ...state,
        password: action.password,
        id: action.payload.id,
        email: action.payload.email,
        isFetching: false,
        errorSignUp: false,
        messageSignUp: 'authorization was successful',
      }

    case 'SIGN_UP_FAIL':
      return { ...state,
        isFetching: false,
        errorSignUp: true,
        messageSignUp: action.payload,
      }
    
      /* get token */
    case 'SIGN_IN_REQUEST':
      return { ...state,
        isFetching: true,
        errorSignIn: false,
      }

    case 'SIGN_IN_SUCCESS':     
      return { ...state,
        isFetching: false,
        errorSignIn: false,
        messageSignIn: action.payload,
      }

    case 'SIGN_IN_FAIL':
      return { ...state,
        isFetching: false,
        errorSignIn: true,
        messageSignIn: action.payload,
      }


    default:
      return state
  }
}

