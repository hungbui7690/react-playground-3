/*
  Passing Functions via Props
  - use onSelectedItem -> convention


*/

import ListGroup from './components/ListGroup'

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  // #
  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectedItem} // #
      />
    </div>
  )
}

export default App
