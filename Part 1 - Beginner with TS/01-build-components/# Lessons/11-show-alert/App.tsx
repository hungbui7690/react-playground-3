/*
  Showing an Alert
  - Alert className: alert-dismissible
  - Alert -> onClose: () => setAlertVisible(false)


*/

import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
  const [alertVisible, setAlertVisible] = useState(false) // #

  return (
    <div>
      <Button color='danger' onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
      )}
    </div>
  )
}

export default App
