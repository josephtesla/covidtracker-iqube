import React, { Fragment } from 'react'
import RatingChart from '../RatingChart'
import "./index.css";

/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
const roundUp = (num, precision) => {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}


const RateBox = ({ displayText, percent, color }) => {
  return (
    <div className="card ratings-card">
      <RatingChart
        percent={percent}
        color={color}
      />
      <span>{`${displayText} ${roundUp(percent, 2)}%`}</span>
    </div>
  )
}

export default RateBox;