import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux' //4
import store from '../src/redux/store' //5


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* 6 */}
      <App />
    </Provider>
  </React.StrictMode>
)
