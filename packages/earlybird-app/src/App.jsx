import React, { Component } from 'react'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Footer from './containers/Footer/Footer'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
