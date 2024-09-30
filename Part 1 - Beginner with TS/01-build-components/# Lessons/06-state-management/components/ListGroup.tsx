import { useState } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  const [selectedItem, setSelectedItem] = useState(-1) // # -1 = no item selected

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}

      <ul className='list-group'>
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              className={
                selectedItem === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              } // #
              key={item}
              onClick={() => setSelectedItem(index)} // #
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}
export default ListGroup
