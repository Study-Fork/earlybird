import React, { Component } from 'react'
import graph from 'earlybird-integration'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Footer from './containers/Footer/Footer'
import constants from './constants'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupId: constants.groupId,
      user: {},
      feeds: [],
    }
    this.onLogin = this.onLogin.bind(this)
  }

  async onLogin(response) {
    const feeds = await graph({
      method: 'GET',
      url: `/${this.state.groupId}/feed`,
      body: {
        access_token: response.accessToken,
        fields: 'message,comments{comments{message,from},message,from}',
      },
    })
    this.setState({
      feeds: [...feeds],
      user: response,
    })
  }

  render() {
    return (
      <div className="container">
        <Header onLogin={this.onLogin} />
        {this.state.feeds.length > 0 &&
          <Main user={this.state.user} feeds={this.state.feeds} />
        }
        <Footer />
      </div>
    )
  }
}

export default App
