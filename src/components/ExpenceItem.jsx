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
      <ExpenseDate date={props.date} />
     
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <ExpenceDetail  details={props.details}/>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={removeHandler}>Delete</button>
        <button onClick={updateAmountHandler}>Set $100</button>
      </div>
      
      </div>
  );
}

export default ExpenseItem;
