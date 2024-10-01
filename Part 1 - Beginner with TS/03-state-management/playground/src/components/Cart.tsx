interface Props {
  cartItems: string[]
  // setCartItems: React.Dispatch<React.SetStateAction<string[]>> // DON'T DO THIS
  onClear: () => void // DO THIS
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div className='mt-3'>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </div>
  )
}

export default Cart
