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

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    // reportWebVitals()
// import reportWebVitals from './reportWebVitals'