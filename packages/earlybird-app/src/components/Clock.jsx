import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import { Status } from 'earlybird-domain'
import './Clock.scss'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      status: Status.READY,
      tags: [],
      suggestions: ['요가', '웨이트'],
    }
    this.handleAdditionTag = this.handleAdditionTag.bind(this)
    this.handleDeleteTag = this.handleDeleteTag.bind(this)
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

  handleAdditionTag(tag) {
    this.setState((prevState) => {
      const { tags } = prevState
      tags.push({
        id: tags.length + 1,
        text: tag,
      })
      return { tags }
    })
  }

  handleDeleteTag(i) {
    this.setState((prevState) => {
      const { tags } = prevState
      tags.splice(i, 1)
      return { tags }
    })
  }

  handleClickBtn() {
    const next = this.state.status === Status.STARTED ? Status.FINISHED : Status.READY
    this.setState(prevState => ({
      status: prevState.status === Status.READY ? Status.STARTED : next,
    }))
  }

  render() {
    const { tags, suggestions } = this.state
    const autofocusTags = true
    return (
      <div className="clock-area">
        <div className="clock">
          {this.state.date.toLocaleTimeString('ko-KR')}
        </div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleAddition={this.handleAdditionTag}
          handleDelete={this.handleDeleteTag}
          autofocus={autofocusTags}
          placeholder="Add new one to do"
        />
        <button className="btn btn-success btn-lg btn-block" onClick={this.handleClickBtn}>
          {this.state.status}
        </button>
      </div>
    )
  }
}

export default Clock
