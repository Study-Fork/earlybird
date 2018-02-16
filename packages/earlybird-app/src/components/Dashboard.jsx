import React, { Component } from 'react'
import Participant from './Participant'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: [
        { name: '정민혁', checkedCount: 10 },
        { name: '홍길동', checkedCount: 5 },
      ],
    }
  }
  render() {
    return (
      <ul className="list-group">
        <Participant participant={this.state.participants[0]} />
        <Participant participant={this.state.participants[1]} />
      </ul>
    )
  }
}

export default Dashboard
