import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { themeSlice } from './theme'
import { issuesSlice } from './issues'
import { statuesSlice } from './statuses'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    issues: issuesSlice.reducer,
    statues: statuesSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
