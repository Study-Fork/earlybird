import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Today from '../../components/Today'
import Clock from '../../components/Clock'
import Dashboard from '../../components/Dashboard'
import History from '../../components/History'
import Description from '../../components/Description'

const TabMenu = Object.freeze({
  TODAY: '오늘의 얼또',
  HISTORY: '지난 얼또',
  MY: '내 정보',
  HONOR: '명예의 전당',
})

class Main extends Component {
  render() {
    const { user, feeds } = this.props
    const latestFeed = feeds.find(feed => feed.message.includes('ROUND'))
    const { comments } = latestFeed
    return (
      <main className="content">
        <Tabs>
          <TabList>
            <Tab><b>{TabMenu.TODAY}</b></Tab>
            <Tab><b>{TabMenu.HISTORY}</b></Tab>
            <Tab><b>{TabMenu.MY}</b></Tab>
            <Tab><b>{TabMenu.HONOR}</b></Tab>
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
            <Description />
          </TabPanel>
          <TabPanel>
            <Description />
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
