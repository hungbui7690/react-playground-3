/*
  Sharing State between Components
  - pic
  - we want to share state between components
  - Navbar
    - Shopping Cart -> item 1, item 2, item 3


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState(['item 1', 'item 2', 'item 3'])

  return (
    <div className='mt-5 container'>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  )
}

export default App
