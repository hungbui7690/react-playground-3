/*
  Integrating with React Hook Form and Zod
  - category: z.enum(categories) -> returns error
    -> to fix: add "const assertion" 
    -> export const categories = [....] as const


*/

import 'bootstrap/dist/css/bootstrap.css'
import ExpenseList from './expense-tracker/ExpenseList'
import { useState } from 'react'
import ExpenseFilter from './expense-tracker/ExpenseFilter'
import ExpenseForm from './expense-tracker/ExpenseForm'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'rent', amount: 1200, category: 'Utility' },
    { id: 2, description: 'buy hams', amount: 50, category: 'Grocery' },
    { id: 3, description: 'travel', amount: 800, category: 'Travel' },
    { id: 4, description: 'utility', amount: 120, category: 'Utility' },
    { id: 5, description: 'buy fries', amount: 30, category: 'Grocery' },
  ])

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses

  return (
    <div className='mt-5 container'>
      <ExpenseForm />
      <div className='mb-3'></div>
      <ExpenseFilter
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  )
}

export default App
