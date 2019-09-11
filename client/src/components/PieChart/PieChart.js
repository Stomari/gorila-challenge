import React from 'react';
import ReactChart from 'react-minimal-pie-chart';

const PieChart = ({ fixedIncome, variableIncome }) => {
  const fixedPercentage = parseFloat(((fixedIncome.length * 100) / (fixedIncome.length + variableIncome.length)).toFixed(2));
  const variablePercentage = parseFloat(((variableIncome.length * 100) / (fixedIncome.length + variableIncome.length)).toFixed(2));
  
  if (fixedPercentage || variablePercentage) {
    return (
      <section className="pie-chart">
        <div className="pie-info">
          <div className="row">
            <div className="fixed-legend"></div>
            <h4 className="fixed-percentage"><strong>{fixedPercentage}%</strong> da carteira em renda fixa</h4>
          </div>
          <div className="row">
            <div className="variable-legend"></div>
            <h4 className="variable-percentage"><strong>{variablePercentage}%</strong> da carteira em renda variável</h4>
          </div>
        </div>
        <ReactChart className="chart" data={[
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
      </section>
    )
  } else {
    return (
      null
    )
  }
}

export default PieChart;