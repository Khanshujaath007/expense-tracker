import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {

  const [Filteryear,setFilteryear] = useState('2022');

  const filterYearChangeHandler=(selectedYear)=>{
    setFilteryear(selectedYear);
  }
  
  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === Filteryear;
  })
  
  return (
    <Card className="expenses">
      <ExpensesFilter seleted={Filteryear} onChangeFilter={filterYearChangeHandler}/>
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList expenses={filteredExpense} />
    </Card>
  );
}

export default Expenses;