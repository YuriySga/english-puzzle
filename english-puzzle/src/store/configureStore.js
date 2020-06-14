 import { rootReducer } from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(
  rootReducer,
  applyMiddleware(logger))

