import React, { Component } from 'react'
import PropTypes from 'prop-types'

const prefix = '시작'

class Participant extends Component {
  render() {
    const { participant } = this.props
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {participant.message.replace(`[${prefix}]`, '').replace(prefix, '')}
        <span>{participant.comments && <i className="fas fa-check" />}</span>
      </li>
    )
  }
}

Participant.propTypes = {
  participant: PropTypes.object.isRequired,
}

export default Participant
