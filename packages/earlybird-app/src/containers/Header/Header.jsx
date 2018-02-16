import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <i className="fab fa-accessible-icon fa-3x" />
          <div className="navigation-links">
            <i className="fab fa-angellist fa-3x" />
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
