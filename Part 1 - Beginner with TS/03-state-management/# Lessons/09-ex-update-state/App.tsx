/*
  Exercise - Updating State


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
      score: 0,
    },
  })
  const [pizzas, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['pepperoni', 'pineapple'],
  })
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: 'Pizza', price: 10, quantity: 1 },
      { id: 2, name: 'Hamburger', price: 5, quantity: 3 },
      { id: 3, name: 'Fries', price: 2, quantity: 2 },
    ],
  })

  const handleCLick = () => {
    setGame({
      ...game,
      player: { ...game.player, score: game.player.score + 1 },
    })

    setPizza({
      ...pizzas,
      toppings: [...pizzas.toppings, 'cheese'],
    })

    setCart({
      ...cart,
      items: cart.items.map((item) => ({
        ...item,
        quantity: item.id === 1 ? item.quantity + 1 : item.quantity,
      })),
    })
  }

  return (
    <div className='mt-5 container'>
      <div>
        <h2>Game</h2>
        <p>
          <span className='fw-bold'>Score:</span> {game.player.name} -{' '}
          {game.player.score}
        </p>
      </div>
      <ul className='mb-3 list-group'>
        <h2>Pizza</h2>
        {pizzas.toppings.map((topping, index) => (
          <li className='list-group-item' key={index}>
            {topping}
          </li>
        ))}
      </ul>
      <ul className='mb-3 list-group'>
        <h2>Cart</h2>
        {cart.items.map((item, index) => (
          <li className='list-group-item' key={index}>
            {item.name} - ${item.price} -{' '}
            <span className='bg-danger rounded-pill badge'>
              {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <button className='btn btn-primary' onClick={handleCLick}>
        Click
      </button>
    </div>
  )
}

export default App
