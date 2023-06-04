import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

// Components
import Card from '../components/Cards/Card'
import CardFooter from '../components/Cards/CardFooter'
import ContainerCard from '../components/Cards/ContainerCard'
import Section from '../components/Section'
import Label from '../components/Label'
import WeatherCondition from '../components/WeatherCondition'
import Loading from '../components/Loading'
import Badge from '../components/Badge'
// Pages
import Weather from './Weather'
// Resources
import sad from '../assets/sad.png'
import { trimAndLowerText } from '../utils/Text'
import { millisecondsToDate, weekName } from '../utils/Date'

const weather = {
  lat: -27.4701,
  lon: 153.0211,
  timezone: 'Australia/Brisbane',
  timezone_offset: 36000,
  current: {
    dt: 1619296373,
    sunrise: 1619294984,
    sunset: 1619335308,
    temp: 13.16,
    feels_like: 12.99,
    pressure: 1021,
    humidity: 94,
    dew_point: 12.22,
    uvi: 0.27,
    clouds: 20,
    visibility: 10000,
    wind_speed: 4.12,
    wind_deg: 210,
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d'
      }
    ]
  },
  daily: [
    {
      dt: 1619312400,
      sunrise: 1619294984,
      sunset: 1619335308,
      moonrise: 1619331300,
      moonset: 1619285880,
      moon_phase: 0.42,
      temp: {
        day: 21.22,
        min: 13.16,
        max: 24.65,
        night: 17.46,
        eve: 20.65,
        morn: 13.7
      },
      feels_like: {
        day: 20.91,
        night: 13.48,
        eve: 20.39,
        morn: 13.48
      },
      pressure: 1021,
      humidity: 58,
      dew_point: 12.64,
      wind_speed: 3.3,
      wind_deg: 72,
      wind_gust: 3.43,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 4,
      pop: 0.04,
      uvi: 6.84
    },
    {
      dt: 1619398800,
      sunrise: 1619381417,
      sunset: 1619421656,
      moonrise: 1619419980,
      moonset: 1619376240,
      moon_phase: 0.46,
      temp: {
        day: 22.89,
        min: 14.96,
        max: 24.39,
        night: 17.01,
        eve: 20.72,
        morn: 15.33
      },
      feels_like: {
        day: 22.51,
        night: 15.14,
        eve: 20.49,
        morn: 15.14
      },
      pressure: 1022,
      humidity: 49,
      dew_point: 11.69,
      wind_speed: 4.8,
      wind_deg: 114,
      wind_gust: 5.02,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 0,
      pop: 0.29,
      uvi: 6.89
    },
    {
      dt: 1619485200,
      sunrise: 1619467851,
      sunset: 1619508004,
      moonrise: 1619508840,
      moonset: 1619466660,
      moon_phase: 0.5,
      temp: {
        day: 23.47,
        min: 14.68,
        max: 24.36,
        night: 17.93,
        eve: 21.1,
        morn: 14.87
      },
      feels_like: {
        day: 23.15,
        night: 14.61,
        eve: 20.81,
        morn: 14.61
      },
      pressure: 1024,
      humidity: 49,
      dew_point: 12.02,
      wind_speed: 4.96,
      wind_deg: 121,
      wind_gust: 8.67,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: 15,
      pop: 0.34,
      uvi: 6.43
    },
    {
      dt: 1619571600,
      sunrise: 1619554284,
      sunset: 1619594354,
      moonrise: 1619597820,
      moonset: 1619557260,
      moon_phase: 0.54,
      temp: {
        day: 21.83,
        min: 14.94,
        max: 22.95,
        night: 17.95,
        eve: 22.44,
        morn: 14.94
      },
      feels_like: {
        day: 21.69,
        night: 14.71,
        eve: 22.2,
        morn: 14.71
      },
      pressure: 1024,
      humidity: 62,
      dew_point: 14.14,
      wind_speed: 4.5,
      wind_deg: 125,
      wind_gust: 8.11,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 5,
      pop: 0.74,
      rain: 1.32,
      uvi: 6.36
    },
    {
      dt: 1619658000,
      sunrise: 1619640718,
      sunset: 1619680704,
      moonrise: 1619687220,
      moonset: 1619647920,
      moon_phase: 0.58,
      temp: {
        day: 21.15,
        min: 16.32,
        max: 22.35,
        night: 17,
        eve: 20.76,
        morn: 16.34
      },
      feels_like: {
        day: 21.07,
        night: 16.28,
        eve: 20.67,
        morn: 16.28
      },
      pressure: 1023,
      humidity: 67,
      dew_point: 14.85,
      wind_speed: 4.94,
      wind_deg: 122,
      wind_gust: 5.64,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 96,
      pop: 1,
      rain: 5.02,
      uvi: 6.3
    },
    {
      dt: 1619744400,
      sunrise: 1619727152,
      sunset: 1619767056,
      moonrise: 1619776920,
      moonset: 1619738580,
      moon_phase: 0.61,
      temp: {
        day: 20.84,
        min: 15.86,
        max: 21.75,
        night: 17.52,
        eve: 20.35,
        morn: 15.86
      },
      feels_like: {
        day: 20.76,
        night: 15.83,
        eve: 20.24,
        morn: 15.83
      },
      pressure: 1023,
      humidity: 68,
      dew_point: 14.77,
      wind_speed: 5.74,
      wind_deg: 135,
      wind_gust: 8.68,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 62,
      pop: 0.59,
      rain: 1.06,
      uvi: 7
    },
    {
      dt: 1619830800,
      sunrise: 1619813586,
      sunset: 1619853408,
      moonrise: 1619866920,
      moonset: 1619828940,
      moon_phase: 0.65,
      temp: {
        day: 22.02,
        min: 15.42,
        max: 23.13,
        night: 18.24,
        eve: 21.46,
        morn: 15.42
      },
      feels_like: {
        day: 21.9,
        night: 15.29,
        eve: 21.72,
        morn: 15.29
      },
      pressure: 1025,
      humidity: 62,
      dew_point: 14.48,
      wind_speed: 4.02,
      wind_deg: 129,
      wind_gust: 8.49,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 40,
      pop: 0.74,
      rain: 3.26,
      uvi: 7
    },
    {
      dt: 1619917200,
      sunrise: 1619900020,
      sunset: 1619939762,
      moonrise: 1619957100,
      moonset: 1619919060,
      moon_phase: 0.69,
      temp: {
        day: 18.81,
        min: 17.72,
        max: 18.85,
        night: 18.21,
        eve: 18.74,
        morn: 17.72
      },
      feels_like: {
        day: 19.23,
        night: 18.08,
        eve: 19.15,
        morn: 18.08
      },
      pressure: 1023,
      humidity: 95,
      dew_point: 17.95,
      wind_speed: 4.19,
      wind_deg: 83,
      wind_gust: 4.74,
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 1,
      rain: 32.36,
      uvi: 7
    }
  ]
}

function Home() {
  const [indexSelected, setIndexSelected] = useState(null)
  const history = useHistory()

  if (!weather)
    return (
      <Loading>
        <Label>loading...</Label>
      </Loading>
    )

  if (weather && weather.error) {
    return (
      <div>
        <img src={sad} alt="error on try to get geolocation coords" />
        <Label size="sm" block>
          Looks like you should allow geolocation permission
        </Label>
      </div>
    )
  }

  const forecastDays = weather.daily.slice(0, 5)
  return (
    <Section>
      <Badge>{weather.timezone}</Badge>
      <ContainerCard data-testid="container-card">
        {forecastDays.map((forecastDay, index) => {
          const date = millisecondsToDate(forecastDay.dt).getDay()
          const dayName = weekName(date).short
          return (
            <Card
              key={forecastDay.dt}
              selected={index === indexSelected}
              onClick={() => {
                setIndexSelected(index)
                history.push({
                  pathname: `/${dayName.toLowerCase()}`,
                  state: {
                    ...forecastDay,
                    current: weather.current
                  }
                })
              }}
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

export default connect(state => ({
  weather: state.weather,
  coords: state.coords
}))(Home)
