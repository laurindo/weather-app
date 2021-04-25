import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import DATA_AU from './__mocks__/forecast-au.json'
import { api } from '../services'
import App from '../App'

import rootSaga, { getForecastWeather } from '../store/sagas'
import rootReducer from '../store/reducers'
import * as actions from '../store/actions'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

describe('Weather', () => {
  it('will show loading message', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(getByText(/loading/i)).toBeTruthy()
    cleanup()
  })

  it('will show loading message', async () => {
    const requestWeather = jest
      .spyOn(api, 'getWeather')
      .mockImplementation(() => Promise.resolve(DATA_AU))
    const dispatched = []
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getForecastWeather
    )
    expect(dispatched[0].payload).toBeTruthy()
    expect(requestWeather).toHaveBeenCalledTimes(1)
    expect(dispatched[0]).toEqual(actions.setWeather(DATA_AU))
  })

  it('will have payload null after request has failed', async () => {
    const requestWeather = jest
      .spyOn(api, 'getWeather')
      .mockImplementation(() => Promise.reject())
    const dispatched = []
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getForecastWeather
    )
    expect(dispatched[0].payload).toBe(null)
    expect(requestWeather).toHaveBeenCalledTimes(1)
    expect(dispatched[0]).toEqual(actions.setWeatherError())
  })
})
