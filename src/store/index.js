import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/theme/themeSlice'

export default configureStore({
  reducer: {
    theme: themeSlice
  }
})
