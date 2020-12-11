import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './BLL/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App key='app' />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
    )
