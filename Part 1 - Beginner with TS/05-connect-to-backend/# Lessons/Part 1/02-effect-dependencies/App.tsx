/*
  Effect Dependencies
  - [] -> fetch once 
  - [category] -> fetch when category changes


*/

import { useState } from 'react'
import ProductList from './ProductList'

function App() {
  const [category, setCategory] = useState('')

  return (
    <div className='mt-5 container'>
      <select
        className='form-select mb-3'
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Open this select menu</option>
        <option value='Book'>Book</option>
        <option value='Video'>Video</option>
        <option value='Game'>Game</option>
      </select>
      <ProductList category={category} />
    </div>
  )
}

export default App
