/*
  Vanilla CSS

  1.  remove bootstrap import link
  2.  create components/ListGroup/ListGroup.tsx
      create components/ListGroup/ListGroup.css


*/

import ListGroup from './components/ListGroup'

function App() {
  const cities = ['New York', 'London', 'Paris', 'Berlin']

  return (
    <div>
      <ListGroup items={cities} heading='Cities' />
    </div>
  )
}

export default App
