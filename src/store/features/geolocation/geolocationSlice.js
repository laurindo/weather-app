import { createSlice } from '@reduxjs/toolkit'
import getPosition from '../../../utils/Geolocation'

const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState: {
    latitude: null,
    longitude: null,
    error: null
  },
  reducers: {
    getGeoLocation: (state, action) => ({
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude
    }),
    setGeolocationError: (state, action) => ({
      ...state,
      error: action.payload
    })
  }
})

export const { getGeoLocation, setGeolocationError } = geolocationSlice.actions

export const getAsyncGeoLocation = () => dispatch => {
  getPosition()
    .then(({ coords }) => {
      dispatch(getGeoLocation(coords))
    })
    .catch(err => {
      dispatch(setGeolocationError(err.message))
    })
}

export default geolocationSlice.reducer
