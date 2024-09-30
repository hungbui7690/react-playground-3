/*
  State vs Props
  - pic


*************************

  Passing Children
  
  1. create components/Alert.tsx
    -> bootstrap docs -> alert


*/

import Alert from './components/Alert'

function App() {
  return (
    <div>
      {/* # Props */}
      {/* <Alert text='Hello, World!' /> */}

      {/* # Children */}
      <Alert>Hello World</Alert>
    </div>
  )
}

export default App
