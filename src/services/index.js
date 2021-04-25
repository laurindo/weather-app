import axios from 'axios'

export const api = {
  getWeather: async (lat = -27.470125, long = 153.021072) => {
    const query = `lat=${lat}&lon=${long}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API}/onecall?${query}`
    )
    if (response && response.data) return response.data
    throw new Error('error to get forecast data')
  }
}
