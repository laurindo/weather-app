import { SET_WEATHER } from '../actions'

const initialState = null

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload
    default:
      return state
  }
}

export default reducer
