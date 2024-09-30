/*
  Ex - Build a Like Component


*/

import Button from './components/Button/Button'

function App() {
  return (
    <div>
      <Button color='primary' onClick={() => console.log('clicked')}>
        Click Me
      </Button>
    </div>
  )
}

export default App
