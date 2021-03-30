/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { store } from '../stores'
import App from '../components/App'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App
          {...props}
        />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
