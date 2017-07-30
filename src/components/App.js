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
          <main className="App container">
            <h1>DriveThru PRO</h1>
            <Routes />
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
