// import ExpenseItem from './components/ExpenceItem';

import ExpenseItem from './components/Expence/ExpenceItem';
import NewExpense from './components/Expence/NewExpence';
import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expenseData, id: Math.random().toString() },
    ]);
  };
  

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
      
      
      <NewExpense addExpenseHandler={addExpenseHandler} />
      

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
