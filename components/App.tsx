/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import globalStyles from '../styles/global'
import NavigationBar from './NavigationBar'
import useDarkMode from '../hooks/useDarkMode'
import styled from '@emotion/styled'

type WrapperProps = {
  backgroundColor: string
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex: auto;
  flex-direction: column;
  background-color: ${props => props.backgroundColor}
`

type AppProps = {
  Component: any,
  pageProps: any
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme, onToggleDarkMode } = useDarkMode()
  const additionalGlobalStyles = css`
    body {
      color: ${theme.textColor}
    }
  `
  return (
    <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Global styles={additionalGlobalStyles} />
    <NavigationBar
      onToggleDarkMode={onToggleDarkMode}
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
