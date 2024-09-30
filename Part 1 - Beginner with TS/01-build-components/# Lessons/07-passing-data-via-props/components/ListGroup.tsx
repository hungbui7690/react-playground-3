import { useState } from 'react'

// #
interface Props {
  items: string[]
  heading: string
}

// #
const ListGroup = ({ items, heading }: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <>
      {/* # */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}

      <ul className='list-group'>
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              className={
                selectedItem === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              key={item}
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}
export default ListGroup
