import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Drive Thru PRO</h1>
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
