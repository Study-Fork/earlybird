import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Participant from './Participant'

class Dashboard extends Component {
  render() {
    const { todayComments } = this.props
    return (
      <ul className="list-group">
        {todayComments.map((item, index) => (
          <Participant participant={item} key={index} />
        ))}
      </ul>
    )
  }
}

Dashboard.propTypes = {
  todayComments: PropTypes.array.isRequired,
}

export default Dashboard
