/*
  Choosing the State Structure
  - avoid redundant state variables 
  - group relevant states into an object
  - avoid deeply nested objects


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Keeping Components Pure
  - pure function: given the same input, always return the same output
    -> const result = myFunc(1) 
      # always return 'a'
      # if sometimes return 'b' -> not pure
    -> props -> Component -> JSX 
      # same props -> same JSX


  - Message.tsx 
    -> +2 -> because of strict mode -> react renders message twice & take the result of 2nd render


*/

import { useState } from 'react'
import Message from './Message'

function App() {
  // Solution 1
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // Solution 2: object
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    contact: {
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
    },
  })

  return (
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default App
