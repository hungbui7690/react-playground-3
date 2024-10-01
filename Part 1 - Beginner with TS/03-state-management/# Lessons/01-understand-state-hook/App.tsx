/*
  Understand the State Hook
  1. set state is async function 
    -> if we log out, we will see the prev value 
  2. state is stored outside of components
  3. use hooks at the top level of the component


*/

import { useState } from 'react'

function App() {
  const [status, setStatus] = useState(true) // 3.

  let count = 0 // 2. count is scoped to this function -> here we initialize it as 0 -> but if App is re-rendered, it will be initialize again as 0 -> count++ below will be lost

  const handleClick = () => {
    setStatus(!status)
    count++
    console.log(count)
    console.log(status) // 1. async
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default App
