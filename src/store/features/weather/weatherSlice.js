import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
  name: 'weather',
  initialState: null,
  reducers: {
    setWeather: (state, action) => {
      console.log(action)
      return action.payload
    }
  }
})

export const { setWeather } = weatherSlice.actions

export const getAsyncWeather = (lat, long) => dispatch => {
  const query = `lat=${lat}&lon=${long}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
  fetch(`${process.env.REACT_APP_WEATHER_API}/onecall?${query}`).then(
    response => {
      response.json().then(data => {
        console.log(data)
        return dispatch(setWeather(data))
      })
    }
  )
}

export default weatherSlice.reducer
