export function SET_LOCATION (location) {
  return {
    type: 'SET_LOCATION',
    payload: location
  }
}

export function SET_GYRO (gyro) {
  console.warn(gyro);
  return {
    type: 'SET_GYRO',
    payload: gyro
  }
}
