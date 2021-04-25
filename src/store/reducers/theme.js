import { SET_THEME } from '../actions'

const initialState = 'dark'

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload
    default:
      return state
  }
}

export default reducer
