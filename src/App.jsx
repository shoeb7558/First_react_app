import ExpenseItem from './components/ExpenceItem';



function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',

      amount: 94.12,
      date: new Date(2020, 7, 14),
      details:[ 
        { detail: 'Toilet Paper' },
        { detail: 'Monthly expence' }
      ],
      
    },
    { id: 'e2', title: 'TV bill', amount: 799.49, date: new Date(2021, 2, 12), details: [
    { detail: 'TV bill ' },{ detail: 'Monthly expence' }]
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      details: [
        { detail: 'Car Insurance' },
        { detail: 'mothly expence' }]
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      details: [
        { detail: 'New Desk for study' },
        { detail: 'one time ' }]
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      
      {expenses.map((expense) => (
        <ExpenseItem
          // key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          details={expense.details}


        />
        
      ))}
    </div>
  );
}

export default App;
