import React, { Component } from 'react'
import './Clock.scss'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  render() {
    return (
      <div className="clock-area">
        <div className="clock">
          {this.state.date.toLocaleTimeString()}
        </div>
        <button className="btn btn-primary btn-lg btn-block" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'START' : 'FINISH'}
        </button>
      </div>
    )
  }
}

export default Clock
