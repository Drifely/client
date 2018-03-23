import { createStore, applyMiddleware, combineReducers } from 'redux'
import { locationReducer } from './reducers/locationReducer'
import signupReducer from './reducers/signupReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  locationReducer,
  signupReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
