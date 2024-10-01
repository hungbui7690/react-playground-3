/*
  Fetching Data
  - https://jsonplaceholder.typicode.com
  - axios
  - error handling


*/

import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data[0].name) // # we can get the "name" property because use .get<User[]>()
        setUsers(res.data)
      })
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div className='mt-5 container'>
      {error && <p className='text-danger'>{error}</p>}
      <ul className='list-group'>
        {users.map((user) => (
          <li key={user.id} className='list-group-item'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
