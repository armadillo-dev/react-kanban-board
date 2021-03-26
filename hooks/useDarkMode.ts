import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../stores'
import {
  toggleDarkMode as toggleDarModeAction,
  setDarkMode as setDarkModeAction,
} from '../stores/theme'
import themes, { ThemeMode } from '../styles/themes'

export default function useDarkMode() {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode)
  const theme = themes[isDarkMode ? ThemeMode.Dark : ThemeMode.Light]
  const dispatch = useAppDispatch()

  const detectOSDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const toggleDarkMode = () => {
    dispatch(toggleDarModeAction())
  }

  const setDarkMode = (isDarkMode: boolean) => {
    dispatch(setDarkModeAction(isDarkMode))
  }

  const watchDarkMode = () => useEffect(() => {
    const onChange = () => {
      setDarkMode(detectOSDarkMode())
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onChange);
    return window.matchMedia('(prefers-color-scheme: dark)').removeListener(onChange);
  }, []);

  return {
    isDarkMode,
    theme,
    detectOSDarkMode,
    toggleDarkMode,
    setDarkMode,
    watchDarkMode,
  }
}
