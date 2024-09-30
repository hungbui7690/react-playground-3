/*
  State vs Props
  - pic


*************************

  Build a Button Component
  - bootstrap docs -> button
    -> children: string instead of ReactNode


*/

import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>

      {/* # */}
      <Button color='danger' onClick={() => console.log('clicked')}>
        Click Me
      </Button>
    </div>
  )
}

export default App
