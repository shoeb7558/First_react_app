import ExpenseItem from './components/Expence/ExpenceItem';
import React, { useState } from 'react';



function App() {
  

  const [expenses, setExpenses] = useState( [
    {
      id: 'e1',
      title: 'Toilet Paper',

      amount: 94.12,
      date: new Date(2020, 7, 14),
      details:[ 
        { detail: 'Toilet Paper monthly' }
      ],
      
    },
    { id: 'e2', title: 'TV bill', amount: 799.49, date: new Date(2021, 2, 12), details: [
    { detail: 'Monthly recharge of TV ' }]
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      details: [
        { detail: 'Car Insurance One time' }]
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden) ',
      amount: 450,
      date: new Date(2021, 5, 12),
      details: [
        { detail: 'New Desk for study' }]
    },
  ]);

  const removeExpenseHandler = (expenseId) => {
    // Filter out the expense with the given ID
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);

    // Update the state with the filtered array
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          details={expense.details}
          onRemoveExpense={() => removeExpenseHandler(expense.id)} // Pass the expense ID


        />
        
      ))}
    </div>
  );
}

export default App;
