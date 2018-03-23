export function locationReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload
      break;
    default:
      return state
  }
}