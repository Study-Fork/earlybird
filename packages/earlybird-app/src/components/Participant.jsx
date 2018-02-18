import React, { Component } from 'react'
import PropTypes from 'prop-types'

const prefix = '시작'

class Participant extends Component {
  render() {
    const { participant } = this.props
    const { message, from } = participant
    const profileURL = from.picture.data.url
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span><img className="profile" src={profileURL} alt="profile" /></span>
        <span className="message">
          {message.replace(`[${prefix}]`, '').replace(prefix, '')}
        </span>
        <span className="done">{participant.comments && <i className="fas fa-check" />}</span>
      </li>
    )
  }
}

Participant.propTypes = {
  participant: PropTypes.object.isRequired,
}

export default Participant
