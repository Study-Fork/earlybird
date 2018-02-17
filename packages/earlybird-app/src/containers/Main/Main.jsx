import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Today from '../../components/Today'
import Clock from '../../components/Clock'
import Dashboard from '../../components/Dashboard'

class Main extends Component {
  render() {
    const { feeds } = this.props
    const latestFeed = feeds.find(feed => feed.message.includes('ROUND'))
    return (
      <main className="content">
        <Today message={latestFeed.message} />
        <Clock />
        <Dashboard />
      </main>
    )
  }
}

Main.propTypes = {
  feeds: PropTypes.array.isRequired,
}

export default Main
