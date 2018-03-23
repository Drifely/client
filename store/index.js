import { createStore, applyMiddleware, combineReducers } from 'redux'
import { locationReducer } from './reducers/locationReducer'

const rootReducer = combineReducers({
  locationReducer
})

const store = createStore(rootReducer)

export default store
