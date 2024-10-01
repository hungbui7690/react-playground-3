/*
  Deleting Data
  - Optimistic Update: faster
    -> Update the UI
    -> Call the Server
  - Pessimistic Update: slower
    -> Call the Server
    -> Update the UI


*/

import { useEffect, useState } from 'react'
import axios, { AxiosError, CanceledError } from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchUsers = async () => {
      setIsLoading(true)

      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal: controller.signal,
          }
        )
        setUsers(res.data)
      } catch (error) {
        if (error instanceof CanceledError) return
        setError((error as AxiosError).message)
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }
    fetchUsers()

    return () => controller.abort()
  }, [])

  const deleteUser = async (id: number) => {
    const originalUsers = [...users] // copy of users

    // # optimistic update
    setUsers(users.filter((user) => user.id !== id))

    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers) // set back to original state in case of error
    }
  }

  if (isLoading) return <div className='spinner-border'></div>

  return (
    <div className='mt-5 container'>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading}
      <ul className='list-group'>
        {users.map((user) => (
          <li
            key={user.id}
            className='d-flex justify-content-between list-group-item'
          >
            {user.name}{' '}
            <button
              className='btn btn-danger btn-sm ms-2'
              onClick={() => {
                deleteUser(user.id)
              }} // #
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
