import { put, call, fork, all } from 'redux-saga/effects'
import * as actions from '../actions'
// import { getWeather } from '../reducers'
import { api } from '../../services'

export function* getForecastWeather() {
  const weather = yield call(api.getWeather)
  yield put(actions.setWeather(weather))
}

export default function* root() {
  yield all([fork(getForecastWeather)])
}
