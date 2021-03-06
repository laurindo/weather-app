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

function Home({ weather }) {
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
                <Label bold>{forecastDay.temp.min}??</Label>
                <Label>{forecastDay.temp.max}??</Label>
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
