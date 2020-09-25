import React from 'react'
import "../Overview/index.css"

const StateOverview = ({ data, stateId }) => {

  const getStateDataFromId = (id) => {
    return data.states.filter(state => state._id === id)[0]
  }

  const statesData = getStateDataFromId(stateId)

  return (
    <div className="card overview-main">
      <h2 className="heading-overview"> 
     STATE : {statesData.state.toUpperCase()}
      </h2>
      <div className="overview-values">
        <div className="overview-values-single red">
          <span>{statesData.confirmedCases}</span> <br></br>
          <p>Confimed</p>
        </div>
        <div className="overview-values-single">
          <span>{statesData.casesOnAdmission}</span> <br></br>
          <p>Cases on Admission</p>
        </div>
        <div className="overview-values-single green">
          <span>{statesData.discharged}</span> <br></br>
          <p>Discharged</p>
        </div>
        <div className="overview-values-single">
          <span>{statesData.death}</span> <br></br>
          <p>Deaths</p>
        </div>
      </div>
    </div>
  )
}

export default StateOverview;
