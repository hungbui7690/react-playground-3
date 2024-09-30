/*
  Ex - Build a Like Component


*/

import Like from './components/Like'

function App() {
  return (
    <div>
      <Like onClick={() => console.log('clicked!')} />
    </div>
  )
}

export default App
