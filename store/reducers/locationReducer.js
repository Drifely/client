export function locationReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload
      break;
    case 'SET_GYRO':
      return {...state, gyro: action.payload}
    default:
      return state
  }
}