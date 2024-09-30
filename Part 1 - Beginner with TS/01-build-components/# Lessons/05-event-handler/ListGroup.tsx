import { MouseEvent } from 'react'

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // e: MouseEvent<HTMLLIElement, globalThis.MouseEvent> -> but we simplify by using MouseEvent
  const handleClick = (e: MouseEvent) => {
    console.log(e.target)
  }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}

      <ul className='list-group'>
        {items.length > 0 &&
          items.map((item) => (
            <li className='list-group-item' key={item} onClick={handleClick}>
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}
export default ListGroup
