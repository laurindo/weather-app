export const SET_WEATHER = 'SET_WEATHER'
export const SET_THEME = 'SET_THEME'

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    payload: weather
  }
}

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme
  }
}
