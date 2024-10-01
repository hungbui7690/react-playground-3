/*
  Expense Tracker - Building Expense List
  - we will have list of Expenses
  - for each expense we will have description, amount, category


*/

import 'bootstrap/dist/css/bootstrap.css'
import ExpenseList from './expense-tracker/ExpenseList'
import { useState } from 'react'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'rent', amount: 1200, category: 'rent' },
    { id: 2, description: 'food', amount: 500, category: 'food' },
    { id: 3, description: 'travel', amount: 300, category: 'travel' },
  ])

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className='mt-5 container'>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  )
}

export default App
