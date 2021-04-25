import axios from 'axios'

export const api = {
  getWeather: async ({ latitude = -27.470125, longitude = 153.021072 }) => {
    const query = `lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API}/onecall?${query}`
    )
    if (response && response.data) return response.data
    throw new Error('error to get forecast data')
  }
}
