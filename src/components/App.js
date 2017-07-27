import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './Routes'

import store from '../store/store'

import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <h1>Drive Thru PRO</h1>
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
