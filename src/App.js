import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import RateBox from './components/RateBox';
import StateOverview from './components/StateOverview';
import { fetchCovidData } from './redux/actions/covid';
import { connect } from 'react-redux';
import './App.css';


const mapDispatchToProps = dispatch => ({
  fetchCovidData: () => dispatch(fetchCovidData())
})

const mapStateToProps = ({ covid }) => ({
  covidData: covid.covidData,
  loading: covid.loading,
  error: covid.error
})


const App = ({ fetchCovidData, covidData, loading, error }) => {

  //Update Redux store at App initial render
  useEffect(() => {
    fetchCovidData();

  }, [fetchCovidData])

  const [state, setState] = useState({
    selectedStateId: "",
  })

  const handleChange = (e) => {
    const stateId = e.target.value;
    setState({ selectedStateId: stateId })
  }


  return (
    <div className="App">
      <Navigation />
      <div className="main-container main">
        {!loading && covidData ?
          <div>
            <div className="select-div">
              <label>View By State: </label>
              <select className="custom-select" onChange={handleChange}>
                <option value="">General</option>
                {
                  covidData.data.states.map(state => (
                    <option value={state._id}>{state.state}</option>
                  ))
                }
              </select>
            </div>
            <div className="data">
              {(state.selectedStateId ?
                 <StateOverview data={covidData.data} stateId={state.selectedStateId}/> : 
                 <Overview generalData={covidData.data}/>)}
            </div>
            <div>
              <div className="ratings">
                <div>
                  <RateBox
                    displayText="Fatality Rate"
                    percent={(covidData.data.death / covidData.data.totalConfirmedCases) * 100}
                    color="red"
                  />
                </div>
                <div>
                  <RateBox
                    displayText="Recovery Rate"
                    percent={(covidData.data.discharged / covidData.data.totalConfirmedCases) * 100}
                    color="blue"
                  />
                </div>
              </div>
            </div>
          </div> : <h3>LOADING DATA... PLEASE WAIT</h3>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
