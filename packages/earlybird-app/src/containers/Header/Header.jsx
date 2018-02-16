import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appId: '736580453211456',
      fields: 'name,email,picture',
      scope: 'email,public_profile,publish_actions',
      autoLoad: true,
      isLogin: false,
    }
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(response) {
    this.setState({
      ...response,
      isLogin: !!response.accessToken,
    })
  }

  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <i className="fab fa-angellist fa-3x" />
          <div className="navigation-links">
            {this.state.isLogin ? (
              <div>{this.state.name}</div>
            ) : (
              <FacebookLogin
                appId={this.state.appId}
                autoLoad={this.state.autoLoad}
                fields={this.state.fields}
                scope={this.state.scope}
                callback={this.responseFacebook}
                size="small"
                icon="fa-facebook"
                textButton="Login"
                language="ko-KR"
              />
            )}
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
