/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { store } from '../stores'
import App from '../components/App'

function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <App
        {...props}
      />
    </Provider>
  )
}

export default MyApp
