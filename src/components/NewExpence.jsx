import React from 'react';
import ExpenceForm from './ExpenceForm';
import './NewExpence.css';

const NewExpense = (props) => {
  const onSaveEcpenceHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.addExpenseHandler(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenceForm onSaveExpence={onSaveEcpenceHandler} />
    </div>
  );
};

export default NewExpense;
