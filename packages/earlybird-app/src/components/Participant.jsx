import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Participant extends Component {
  render() {
    const { participant } = this.props
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {participant.name}
        <span className="badge badge-primary badge-pill">{participant.checkedCount}</span>
      </li>
    )
  }
}

Participant.propTypes = {
  participant: PropTypes.object.isRequired,
}

export default Participant
