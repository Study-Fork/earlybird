import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Today extends Component {
  render() {
    const { message } = this.props
    return (
      <div className="card card-body">
        {message}
      </div>
    )
  }
}

Today.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Today
