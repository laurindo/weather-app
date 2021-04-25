import { put, call, fork, all } from 'redux-saga/effects'
import * as actions from '../actions'
import { api } from '../../services'

export function* getForecastWeather() {
  try {
    const weather = yield call(api.getWeather)
    yield put(actions.setWeather(weather))
  } catch (error) {
    yield put(actions.setWeatherError())
  }
}

export default function* root() {
  yield all([fork(getForecastWeather)])
}
