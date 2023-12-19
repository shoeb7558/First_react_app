// import ExpenseItem from './components/ExpenceItem';

import ExpenseItem from './components/Expence/ExpenceItem';
import NewExpense from './components/Expence/NewExpence';
import ExpenceFilter from './components/Expence/ExpenceFilter';
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

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      
      
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <ExpenceFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     
       {filteredExpenses.length === 0 ? (<p style={{ color: '#40005d', fontStyle: 'italic', fontSize:'larger',marginLeft:'15%',marginTop:'-50px',  }}>no data found.</p>):(
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          details={expense.details}
          onRemoveExpense={() => removeExpenseHandler(expense.id)}
          onUpdateAmount={() => updateExpenseAmountHandler(expense.id)}
        />
      ))
      )}
    </div>
  );
}
export default App;
