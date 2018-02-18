import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getHistory from 'earlybird-domain'
import Feed from './Feed'

class History extends Component {
  render() {
    const { user, feeds } = this.props
    const history = getHistory(user, feeds)
    return (
      <ul className="list-group">
        {history.map((item, index) => (
          <Feed feed={item} key={index} />
        ))}
      </ul>
    )
  }
}

History.propTypes = {
  user: PropTypes.object.isRequired,
  feeds: PropTypes.array.isRequired,
}

export default History
