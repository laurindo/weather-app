import { SET_WEATHER, SET_WEATHER_ERROR } from '../actions'

const initialState = null

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload
    case SET_WEATHER_ERROR:
      return action.payload
    default:
      return state
  }
}

export default reducer
