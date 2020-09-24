import React from 'react'
import "../Overview/index.css"

const StateOverview = () => {
  return (
    <div className="card overview-main">
      <h2 className="heading-overview"> 
     STATE : KOGI STATE
      </h2>
      <div className="overview-values">
        <div className="overview-values-single red">
          <span>57,724</span> <br></br>
          <p >Confirmed</p>
        </div>
        <div className="overview-values-single">
          <span>57,724</span> <br></br>
          <p>Cases on Admission</p>
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

export default StateOverview;
