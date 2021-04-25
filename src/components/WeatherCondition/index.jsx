import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import cloudy from '../../assets/cloudy.png'
import rainy from '../../assets/rainy.png'
import sunny from '../../assets/sunny.png'
import snowy from '../../assets/snowy.png'

const conditions = {
  fewclouds: cloudy,
  scatteredclouds: cloudy,
  brokenclouds: cloudy,
  clouds: cloudy,
  showerrain: rainy,
  thunderstorm: rainy,
  rain: rainy,
  clear: sunny,
  snow: snowy,
  mist: snowy
}

const Img = styled.img`
  width: 32px;
  height: 32px;
`

function WeatherCondition({ condition = 'rain' }) {
  return <Img src={conditions[condition]} alt={condition} />
}

WeatherCondition.propTypes = {
  condition: PropTypes.oneOf([
    'fewclouds',
    'scatteredclouds',
    'brokenclouds',
    'showerrain',
    'thunderstorm',
    'rain',
    'clearsky',
    'clear',
    'clouds',
    'snow',
    'mist'
  ]).isRequired
}

export default WeatherCondition
