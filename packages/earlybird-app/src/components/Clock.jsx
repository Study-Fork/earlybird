import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import { Status } from 'earlybird-domain'

class Clock extends Component {
  constructor(props) {
    super(props)
    const tags = localStorage.getItem('tags')
    this.state = {
      date: new Date(),
      tags: tags ? tags.split(',') : [],
      status: Status.READY,
    }
    this.handleChangeTags = this.handleChangeTags.bind(this)
    this.handleClickBtn = this.handleClickBtn.bind(this)
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

  handleChangeTags(tags) {
    localStorage.setItem('tags', tags)
    this.setState({ tags })
  }

  handleClickBtn() {
    const next = this.state.status === Status.STARTED ? Status.FINISHED : Status.READY
    this.setState(prevState => ({
      status: prevState.status === Status.READY ? Status.STARTED : next,
    }))
  }

  render() {
    const { tags } = this.state
    const inputProps = {
      className: 'react-tagsinput-input',
      placeholder: 'Enter Todo',
    }
    return (
      <div className="clock-area">
        <TagsInput value={tags} onChange={this.handleChangeTags} inputProps={inputProps} />
        <button className="btn btn-success btn-lg btn-block" onClick={this.handleClickBtn} disabled={this.state.status === Status.FINISHED}>
          {this.state.status !== Status.FINISHED && this.state.date.toLocaleTimeString('ko-KR')}  {this.state.status}
        </button>
      </div>
    )
  }
}

export default Clock
