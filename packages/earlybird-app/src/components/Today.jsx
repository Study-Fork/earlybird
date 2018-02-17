import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Today extends Component {
  render() {
    const { todayFeed } = this.props
    return (
      <div className="card card-body">
        {todayFeed.message}
      </div>
    )
  }
}

Today.propTypes = {
  todayFeed: PropTypes.object.isRequired,
}

export default Today
