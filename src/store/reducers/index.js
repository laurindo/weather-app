import { combineReducers } from 'redux'
import weather from './weather'
import theme from './theme'

export function setWeather(state) {
  return state.weather
}

const rootReducer = combineReducers({
  theme,
  weather
})

export default rootReducer
