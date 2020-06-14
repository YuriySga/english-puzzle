import { combineReducers } from 'redux'
import { pageReducer } from './page'
//import { userReducer } from './user'
import { userstate } from './user'
import { homeReducer } from './home'

export const rootReducer = combineReducers({
  page: pageReducer,
  home: homeReducer,
  user: userstate,
})