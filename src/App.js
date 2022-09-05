import Expense from "./componnents/Expenses/Expense";
import React, {useState} from "react";
import NewExpense from "./componnents/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {id: `e1`,
   title: `Paper Toilets`,
   amount: 294.67,
   date: new Date(2022, 2, 28),},

  { id: `e2`,
    title: `New TV`,
    amount: 456.67,
    date: new Date(2022, 2, 28),},

  { id:`e3`,
    title: `Car Insurance`,
    amount: 694.67,
    date: new Date(2022, 2, 28),},

  { id:`e4`,
    title: `Apple`,
    amount: 54.67,
    date: new Date(2022, 2, 28),},
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses]
    });
  }


  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
      
    </div>
  );
}

export default App;
