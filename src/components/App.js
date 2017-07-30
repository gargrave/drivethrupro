import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Titlebar from './Common/Titlebar'
import Routes from './Routes'

import store from '../store/store'

import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Titlebar title="DriveThru PRO" titleLink="/" />
            <main className="App container">
              <Routes />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
