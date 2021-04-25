import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Section from '../components/Section'
import Label from '../components/Label'
import WeatherCondition from '../components/WeatherCondition'
import { millisecondsToDate, weekName } from '../utils/Date'
import { trimAndLowerText } from '../utils/Text'

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Weather() {
  const {
    location: { state }
  } = useHistory()

  const date = millisecondsToDate(state.dt).getDay()
  const dayName = weekName(date).name

  return (
    <Section>
      <h1>{dayName}</h1>
      <Detail>
        <Temperature>
          <WeatherCondition
            condition={trimAndLowerText(state.weather[0].main)}
          />
          <Label size="lg">{state.temp.day}°</Label>
        </Temperature>
        <div>
          <Label block size="sm">
            Clouds: <Label bold>{state.clouds}%</Label>
          </Label>
          <Label block size="sm">
            Humidity: <Label bold>{state.humidity}%</Label>
          </Label>
          <Label block size="sm">
            Wind: <Label bold>{state.wind_speed} km/h</Label>
          </Label>
        </div>
      </Detail>
    </Section>
  )
}

export default Weather
