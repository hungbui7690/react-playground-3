import { CiShoppingCart } from 'react-icons/ci'

interface Props {
  cartItemsCount: number
}

const Navbar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <h1>Navbar</h1>
      <CiShoppingCart size={30} />
      <span className='bg-secondary badge'>{cartItemsCount}</span>
    </div>
  )
}
export default Navbar
