import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  isDarkMode: boolean
}

const initialState: ThemeState = {
  isDarkMode: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode
    },
    setDarkMode: (state, payload: PayloadAction<boolean>) => {
      state.isDarkMode = payload.payload
    },
  }
})

export const { toggleDarkMode, setDarkMode } = themeSlice.actions
export default themeSlice.reducer
