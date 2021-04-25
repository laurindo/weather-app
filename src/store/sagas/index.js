import { put, call, fork, all } from 'redux-saga/effects'
import * as actions from '../actions'
import { api } from '../../services'
import { getPosition } from '../../utils/Geolocation'

export function* getForecastWeather() {
  try {
    const { coords } = yield call(getPosition)
    const weather = yield call(() =>
      api.getWeather(coords.latitude, coords.longitude)
    )
    yield put(actions.setWeather(weather))
  } catch (error) {
    yield put(actions.setWeatherError())
  }
}

export default function* root() {
  yield all([fork(getForecastWeather)])
}
