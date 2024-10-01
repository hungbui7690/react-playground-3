/*
  Working with Async and Await
  - AxiosError instead of Error


*/

import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  // # react does not allow us to use async in useEffect -> we need to define an async function
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setUsers(res.data)
      } catch (error) {
        setError((error as AxiosError).message)
      }
    }

    fetchUsers()
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
