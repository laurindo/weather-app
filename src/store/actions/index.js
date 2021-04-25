export const SET_WEATHER = 'SET_WEATHER'
export const SET_WEATHER_ERROR = 'SET_WEATHER_ERROR'
export const SET_THEME = 'SET_THEME'

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    payload: weather
  }
}

export function setWeatherError() {
  return {
    type: SET_WEATHER_ERROR,
    payload: {
      error: 'geolocation.not.allowed'
    }
  }
}

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme
  }
}
