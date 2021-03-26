/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import globalStyles from '../styles/global'
import NavigationBar from './NavigationBar'
import useDarkMode from '../hooks/useDarkMode'
import styled from '@emotion/styled'
import type { AppProps } from 'next/app'

type WrapperProps = {
  backgroundColor: string
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex: auto;
  flex-direction: column;
  background-color: ${props => props.backgroundColor}
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const {
    theme,
    detectOSDarkMode,
    setDarkMode,
    watchDarkMode,
    toggleDarkMode,
  } = useDarkMode()

  const additionalGlobalStyles = css`
    body {
      color: ${theme.textColor}
    }
  `
  useEffect(() => {
    const isOSDarkMode = detectOSDarkMode()
    setDarkMode(isOSDarkMode)
  }, [])

  watchDarkMode()

  return (
    <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Global styles={additionalGlobalStyles} />
    <NavigationBar
      onToggleDarkMode={toggleDarkMode}
    />
    <Wrapper
      backgroundColor={theme.backgroundColor}
    >
      <Component
        {...pageProps}
      />
    </Wrapper>
  </ThemeProvider>
  )
}

export default App
