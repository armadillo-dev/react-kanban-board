import { useAppDispatch, useAppSelector } from '../stores'
import { toggleDarkMode } from '../stores/theme'
import themes, { ThemeMode } from '../styles/themes'

export default function useDarkMode() {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode)
  const theme = themes[isDarkMode ? ThemeMode.Dark : ThemeMode.Light]
  const dispatch = useAppDispatch()
  const onToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }

  return {
    isDarkMode,
    theme,
    onToggleDarkMode,
  }
}
