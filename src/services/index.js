export const api = {
  getWeather: (lat = -27.470125, long = 153.021072) =>
    new Promise((resolve, reject) => {
      const query = `lat=${lat}&lon=${long}&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      fetch(`${process.env.REACT_APP_WEATHER_API}/onecall?${query}`)
        .then(response => {
          response.json().then(data => {
            resolve(data)
          })
        })
        .catch(err => reject(err.message))
    })
}
