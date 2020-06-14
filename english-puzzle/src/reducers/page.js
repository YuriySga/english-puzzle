const initialState = {
  year: 2018,
  photos: [],

  pageName: 'home'
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'SET_YEAR':
      return { ...state, year: action.payload }

    case 'SET_PAGE':
      return { ...state, pageName: action.payload }

    default:
      return state
  }
}