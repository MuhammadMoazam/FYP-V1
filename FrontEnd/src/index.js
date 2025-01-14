import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'
import ApiContextProvider from './components/Contexts/API/APIContext'
import UserContextProvider from './components/Contexts/User/UserContext'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContextProvider>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </UserContextProvider>
  </Provider>,
);
