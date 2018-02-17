import React, { Component } from 'react'
import graph from 'earlybird-integration'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Footer from './containers/Footer/Footer'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupId: '688419537976752',
      feeds: [],
    }
    this.onLogin = this.onLogin.bind(this)
  }

  async onLogin(response) {
    const feeds = await graph({
      accessToken: response.accessToken,
      method: 'GET',
      url: `/${this.state.groupId}/feed`,
      body: {
        fields: 'message,comments{comments{message},message}',
      },
    })
    this.setState({
      feeds: [...feeds],
    })
  }

  render() {
    return (
      <div className="container">
        <Header onLogin={this.onLogin} />
        {this.state.feeds.length > 0 &&
          <Main feeds={this.state.feeds} />
        }
        <Footer />
      </div>
    )
  }
}

export default App
