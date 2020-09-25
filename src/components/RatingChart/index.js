import React from 'react'
import Doughnut from "react-chartjs-2"

const RatingChart = ({ percent, color}) => {

  const data = {
    labels: [
      '',
      'Portion',
    ],
    datasets: [{
      data: [100 - percent, percent],
      backgroundColor: [
        '#C0C0C0',
        color
      ],

    }],

    text: '1.9%%'
  };


  return (
    <Doughnut
      data={data}
      width={100}
      height={100}
      options={{
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        responsive: false,
        cutoutPercentage: 80
      }}
    />
  )
}

export default RatingChart
