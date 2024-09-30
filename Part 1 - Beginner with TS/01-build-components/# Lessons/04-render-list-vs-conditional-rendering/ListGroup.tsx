const ListGroup = () => {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']
  items = []

  // Solution 1: conditional rendering
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items</p>
  //     </>
  //   )

  return (
    <>
      <h1>List</h1>
      {/* Solution 2 */}
      {items.length === 0 ? 'No items' : null}
      {items.length === 0 && <p>No items found</p>}

      <ul className='list-group'>
        {/* # rendering list */}
        {items.length > 0 &&
          items.map((item) => (
            <li className='list-group-item' key={item}>
              {item}
            </li>
          ))}
      </ul>
    </>
  )
}
export default ListGroup
