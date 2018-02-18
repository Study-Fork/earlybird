import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Today from '../../components/Today'
import Clock from '../../components/Clock'
import Dashboard from '../../components/Dashboard'
import History from '../../components/History'

class Main extends Component {
  render() {
    const { user, feeds } = this.props
    const latestFeed = feeds.find(feed => feed.message.includes('ROUND'))
    const { comments } = latestFeed
    return (
      <main className="content">
        <Tabs>
          <TabList>
            <Tab><b>TODAY</b></Tab>
            <Tab><b>HISTORY</b></Tab>
            <Tab><b>MY</b></Tab>
          </TabList>
          <TabPanel>
            <Today todayFeed={latestFeed} />
            <Clock />
            <Dashboard todayComments={comments.data} />
          </TabPanel>
          <TabPanel>
            <History user={user} feeds={feeds} />
          </TabPanel>
          <TabPanel>
            <div className="my-area">
              <div className="card">
                <img className="card-img-top" src="http://image.toast.com/aaaaahq/earlybird.png" alt="ready" />
                <div className="card-body">
                  <p className="card-text">
                    <span>준비 중입니다. 이 서비스에 많은 피드백을 부탁드려요!<br /></span>
                    <span><a href="https://github.com/stunstunstun/earlybird/issues" target="blank">https://github.com/stunstunstun/earlybird/issues</a></span>
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </main>
    )
  }
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  feeds: PropTypes.array.isRequired,
}

export default Main
