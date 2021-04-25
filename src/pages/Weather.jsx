import React from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'

import Section from '../components/Section'
import Label from '../components/Label'
import WeatherCondition from '../components/WeatherCondition'
import { millisecondsToDate } from '../utils/Date'
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
  const { nameOfDay } = useParams()
  const {
    location: { state }
  } = useHistory()
  return (
    <Section>
      <h1>Day: {nameOfDay}</h1>
      <Detail>
        <Temperature>
          <WeatherCondition
            condition={trimAndLowerText(state.weather[0].main)}
          />
          <Label size="lg">{state.current.temp}°</Label>
        </Temperature>
        <div>
          <Label>
            Sunrise: {millisecondsToDate(state.sunrise).toISOString()}
          </Label>
          <Label>
            Sunset: {millisecondsToDate(state.sunset).toISOString()}
          </Label>
        </div>
      </Detail>
    </Section>
  )
}

export default Weather
