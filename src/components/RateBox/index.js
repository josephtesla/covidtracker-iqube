import React, { Fragment } from 'react'
import RatingChart from '../RatingChart'
import "./index.css"

const RateBox = ({ displayText, percent, color }) => {
  return (
    <div className="card ratings-card">
      <RatingChart
        percent={percent}
        color={color}
      />
      <span>{`${displayText} ${percent}%`}</span>
    </div>
  )
}

export default RateBox;