import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import Card from '../components/Cards/Card'
import CardFooter from '../components/Cards/CardFooter'
import ContainerCard from '../components/Cards/ContainerCard'
import Section from '../components/Section'
import Label from '../components/Label'
import WeatherCondition from '../components/WeatherCondition'
import Moon from '../components/Moon'
import Weather from './Weather'

import { getAsyncGeoLocation } from '../store/features/geolocation/geolocationSlice'
import { getAsyncWeather } from '../store/features/weather/weatherSlice'
import INITIAL_FORECAST_DAYS from '../tests/__mocks__/forecast-au.json'
import { trimAndLowerText } from '../utils/Text'
import { millisecondsToDate, weekName } from '../utils/Date'

function Home() {
  const dispatch = useDispatch()
  const coordinates = useSelector(state => state.geolocation)
  const weather = useSelector(state => state.weather)
  const history = useHistory()

  useEffect(() => {
    dispatch(getAsyncGeoLocation())
  }, [])

  if (coordinates && coordinates.latitude && coordinates.longitude) {
    dispatch(getAsyncWeather(coordinates.latitude, coordinates.longitude))
  }

  const forecastDays = weather && weather.daily ? weather.daily.slice(0, 5) : []

  return (
    <Section>
      <h1>
        Latitude: {coordinates.latitude} / Longitude: {coordinates.longitude}
      </h1>
      <Moon className="moon" />
      <ContainerCard>
        {forecastDays.map(forecastDay => {
          const date = millisecondsToDate(forecastDay.dt).getDay()
          const dayName = weekName(date).short
          return (
            <Card
              key={forecastDay.dt}
              onClick={() =>
                history.push({
                  pathname: `/${dayName.toLowerCase()}`,
                  state: {
                    ...forecastDay,
                    current: INITIAL_FORECAST_DAYS.current
                  }
                })
              }
            >
              <Label bold>{dayName}</Label>
              <WeatherCondition
                condition={trimAndLowerText(forecastDay.weather[0].main)}
              />
              <CardFooter>
                <Label bold>{forecastDay.temp.min}°</Label>
                <Label>{forecastDay.temp.max}°</Label>
              </CardFooter>
            </Card>
          )
        })}
      </ContainerCard>

      <Switch>
        <Route path="/:nameOfDay">
          <Weather />
        </Route>
      </Switch>
    </Section>
  )
}

export default Home
