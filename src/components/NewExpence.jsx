import React from 'react';

import ExpenceForm from './ExpenceForm';
import './NewExpence.css';

const NewExpense = () => {
  const onSaveEcpenceHandler = (enterdExpenceData) =>
  {
    const expenseData = {
      ...enterdExpenceData,
      id: Math.random().toString()
    };
    console.log(expenseData)
  }



  return (
    <div className='new-expense'>
      <ExpenceForm onSaveExpence={onSaveEcpenceHandler}/>
    </div>
  );
};

export default NewExpense;
