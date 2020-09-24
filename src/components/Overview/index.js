import React from 'react'
import "./index.css"

const Overview = () => {
  return (
    <div className="card overview-main">
      <h2 className="heading-overview"> 
      NIGERIA GENERAL OVERVIEW
      </h2>
      <div className="overview-values">
      <div className="overview-values-single">
          <span>57,724</span> <br></br>
          <p>Samples Tested</p>
        </div>
        <div className="overview-values-single red">
          <span>57,724</span> <br></br>
          <p >Confirmed</p>
        </div>
        <div className="overview-values-single">
          <span>57,724</span> <br></br>
          <p>Active Cases</p>
        </div>
        <div className="overview-values-single green">
          <span>57,724</span> <br></br>
          <p>Discharged</p>
        </div>
        <div className="overview-values-single">
          <span>57,724</span> <br></br>
          <p>Deaths</p>
        </div>
      </div>
    </div>
  )
}

export default Overview;
