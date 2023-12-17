import React from 'react';

import ExpenceForm from './ExpenceForm';
import './NewExpence.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenceForm />
    </div>
  );
};

export default NewExpense;