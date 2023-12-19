import React from 'react';

import Chart from './Chart'

const ExpensesChart = (props) => {

    if (!props.expence || !Array.isArray(props.expence) || props.expence.length === 0) {
        // Handle the case where props.expenses is not defined or is an empty array
        return <p>No expenses found for the selected year.</p>;
      }
      
    

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expence of props.expence) {
    const expenseMonth = expence.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expence.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;