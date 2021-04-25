import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/theme/themeSlice'
import geolocationSlice from './features/geolocation/geolocationSlice'

export default configureStore({
  reducer: {
    theme: themeSlice,
    geolocation: geolocationSlice
  }
})
