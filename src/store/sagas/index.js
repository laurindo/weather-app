import { put, call, fork, all } from 'redux-saga/effects'
import * as actions from '../actions'
import { api } from '../../services'
import { geolocation } from '../../utils/Geolocation'

export function* getForecastWeather() {
  try {
    // I'm having issues to mock this request on Weather.test.js
    const { coords } = yield call(geolocation.getPosition)
    const weather = yield call(api.getWeather, coords)
    yield put(actions.setWeather(weather))
    yield put(actions.setCoords(coords))
  } catch (error) {
    yield put(actions.setWeatherError())
  }
}

export default function* root() {
  yield all([fork(getForecastWeather)])
}
