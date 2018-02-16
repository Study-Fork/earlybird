import React, { Component } from 'react'
import Today from '../../components/Today'
import Clock from '../../components/Clock'
import Dashboard from '../../components/Dashboard'

class Main extends Component {
  render() {
    return (
      <main className="content">
        <Today />
        <Clock />
        <Dashboard />
      </main>
    )
  }
}

export default Main
