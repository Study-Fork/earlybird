import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'
import constants from '../../constants'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appId: constants.appId,
      fields: 'name,picture',
      scope: 'public_profile,publish_actions,user_managed_groups',
      autoLoad: true,
      isLogin: false,
    }
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  responseFacebook(response) {
    this.props.onLogin(response)
    this.setState({
      ...response,
      isLogin: !!response.accessToken,
    })
  }

  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <a href="https://www.facebook.com/groups/earlyddorai" target="blank"><img src="http://image.toast.com/aaaaahq/earlybird_50x50.png" alt="logo" /></a>
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

Header.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Header
