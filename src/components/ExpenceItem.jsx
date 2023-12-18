import ExpenseDate from './ExpenceDate';
import ExpenceDetail from './ExpenceDetail';

import './ExpenceItem.css';

function ExpenseItem(props) {
  const removeHandler = () => {
    props.onRemoveExpense();

  }
  const updateAmountHandler = () => {
    props.onUpdateAmount(); // Call the new function to update the amount
  };

 


  return (
    <div className='expense-item'>
    <div className='expense-item__description'>
      <div className='expense-item__date'>{props.date.toLocaleDateString()}</div>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      <div className='expense-item__details'>{props.details}</div>
      
      <button onClick={removeHandler}>Remove</button>
      <button onClick={updateAmountHandler}>Update Amount</button>
    </div>
  </div>
  );
}

export default ExpenseItem;
