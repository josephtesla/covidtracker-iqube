import React from 'react'
import "./index.css";
import flag from "../../assets/flag.jpeg"


const Navigation = () => {
  return (
    <div className="app-bar">
        <img src={flag} width="50px" height="50px" alt="flag"></img>
       <h1>
         Covid Tracker</h1>
    </div>
  )
}

export default Navigation;