/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { store } from '../stores'
import App from '../components/App'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <App
        Component={Component}
        pageProps={pageProps}
      />
    </Provider>
  )
}

export default MyApp
