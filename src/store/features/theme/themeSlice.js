import { createSlice } from '@reduxjs/toolkit'

// You might choice either 'dark' or 'light'
export const initialState = 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      window.console.log('dsds')
      return action.payload === 'dark' ? 'light' : 'dark'
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
