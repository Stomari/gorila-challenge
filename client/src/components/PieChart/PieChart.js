import React from 'react';
import ReactChart from 'react-minimal-pie-chart';

const PieChart = ({ fixedIncome, variableIncome }) => {
  const fixedPercentage = parseFloat(((fixedIncome.length * 100) / (fixedIncome.length + variableIncome.length)).toFixed(2));
  const variablePercentage = parseFloat(((variableIncome.length * 100) / (fixedIncome.length + variableIncome.length)).toFixed(2));
  
  if (fixedPercentage && variablePercentage) {
    return (
      <div className="pie-chart">
        <h4>{fixedPercentage}% da carteira em renda fixa.</h4>
        <h4>{variablePercentage}% da carteira em renda variável.</h4>
        <ReactChart data={[
          {
            title: 'fixed income',
            value: fixedPercentage,
            color: '#50c2c5'
          },
          {
            title: 'variable income',
            value: variablePercentage,
            color: '#6ade92'
          },
        ]}
        />
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default PieChart;