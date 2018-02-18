import React, { Component } from 'react'
import PropTypes from 'prop-types'

const prefix = '시작'

class Feed extends Component {
  render() {
    const { feed } = this.props
    const { message } = feed
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className="message">
          {message.split('\n').map((item, index) => (
            <span key={index}>
              {item.replace(`[${prefix}]`, '').replace(prefix, '')}
              <br />
            </span>
          ))}
        </span>
        {feed.comments && (
          <span className="badge badge-primary badge-pill">{feed.comments.data.length}</span>
        )}
      </li>
    )
  }
}

Feed.propTypes = {
  feed: PropTypes.object.isRequired,
}

export default Feed
