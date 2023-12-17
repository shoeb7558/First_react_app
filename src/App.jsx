// import ExpenseItem from './components/ExpenceItem';

import ExpenseItem from './components/Expence/ExpenceItem';
import NewExpense from './components/Expence/NewExpence';
import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      details: [{ detail: 'Toilet Paper' }],
    },
    {
      id: 'e2',
      title: 'TV bill',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      details: [{ detail: 'TV bill ' }],
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      details: [{ detail: 'Car Insurance' }],
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      details: [
        { detail: 'New Desk for study' },
        { detail: 'one time ' },
      ],
    },
  ]);

  const updateExpenseAmountHandler = (expenseId) => {
    // Find the expense with the given ID
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === expenseId) {
        // Update the amount to a new value, for example, $100
        return { ...expense, amount: expense.amount + 100};
      }
      return expense;
    });

    // Update the state with the modified expenses array
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense />

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          details={expense.details}
          onRemoveExpense={() => removeExpenseHandler(expense.id)}
          onUpdateAmount={() => updateExpenseAmountHandler(expense.id)}
        />
      ))}
    </div>
  );
}
export default App;
