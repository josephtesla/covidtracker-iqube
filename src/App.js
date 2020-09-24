import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import RateBox from './components/RateBox';
import './App.css';
import StateOverview from './components/StateOverview';


const App = () => {

  const [state, setState] = useState({
    selectedStateId: ""
  })

  const handleChange = (e) => {

    const stateId = e.target.value;

    setState({selectedStateId: stateId})
  }

  return (
    <div className="App">
      <Navigation />
      <div className="main-container main">
        <div className="select-div">
          <label>Select state</label>
          <select className="custom-select" onChange={handleChange}>
            <option value="">General</option>
            <option value="lagos">Lagos</option>
            <option value="lagos">Lagos</option>
          </select>
        </div>
        <div className="data">
          {(state.selectedStateId ? <StateOverview /> : <Overview />  )} 
        </div>
        <div>
          <div className="ratings">
            <div>
              <RateBox
                displayText="Fatality Rate"
                percent={20}
                color="red"
              />
            </div>
            <div>
              <RateBox
                displayText="Recovery Rate"
                percent={82}
                color="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
