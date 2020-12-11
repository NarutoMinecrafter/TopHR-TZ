import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './BLL/store'

ReactDOM.render(
  <HashRouter>
    <Provider store={store} >
      <App key='app' />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
    )
