import React, { Component } from 'react'
import Chart from '../../components/Chart/Chart'

class Main extends Component {
  render() {
    return (
      <main className="content">
        <div className="row">
          <div className="col-sm">
            <Chart name="daily" />
          </div>
          <div className="col-sm">
            <Chart name="weekly" />
          </div>
          <div className="col-sm">
            <Chart name="monthly" />
          </div>
        </div>
      </main>
    )
  }
}

export default Main
