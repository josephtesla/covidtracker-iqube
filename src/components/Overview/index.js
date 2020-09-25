import React from 'react'
import "./index.css"

const Overview = ({ generalData }) => {
  console.log(generalData)
  return (
    <div className="card overview-main">
      <h2 className="heading-overview"> 
      NIGERIA GENERAL OVERVIEW
      </h2>
      <div className="overview-values">
      <div className="overview-values-single">
          <span>{generalData.totalSamplesTested}</span> <br></br>
          <p>Samples Tested</p>
        </div>
        <div className="overview-values-single red">
          <span>{generalData.totalConfirmedCases}</span> <br></br>
          <p >Confirmed</p>
        </div>
        <div className="overview-values-single">
          <span>{generalData.totalActiveCases}</span> <br></br>
          <p>Active Cases</p>
        </div>
        <div className="overview-values-single green">
          <span>{generalData.discharged}</span> <br></br>
          <p>Discharged</p>
        </div>
        <div className="overview-values-single">
          <span>{generalData.death}</span> <br></br>
          <p>Deaths</p>
        </div>
      </div>
    </div>
  )
}

export default Overview;
