/*
  Updating Objects


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 3.99,
  })

  // update price
  const handleClick = () => {
    // # Solution 1
    // setDrink({
    //   title: drink.title,
    //   price: 4.99,
    // })

    // # Solution 2
    setDrink({ ...drink, price: 5.99 })
  }

  return (
    <div>
      <button className='m-2 btn btn-primary' onClick={handleClick}>
        Click
      </button>
      {drink.title} - ${drink.price}
    </div>
  )
}

export default App
