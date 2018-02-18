import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Today extends Component {
  render() {
    const { todayFeed } = this.props
    const { message } = todayFeed
    return (
      <div className="card card-body">
        {message.split('\n').map((item, index) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </div>
    )
  }
}

Today.propTypes = {
  todayFeed: PropTypes.object.isRequired,
}

export default Today
