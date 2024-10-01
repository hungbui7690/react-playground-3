/*
  Create Data
  - first, update the users array to update UI first
  - then, call the server to create a new user
  - finally, update the UI again with the new list of users from the server


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
    const originalUsers = [...users]
    setUsers(users.filter((user) => user.id !== id))

    try {
      await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers)
    }
  }

  // # add random user -> here we need to call setUsers() twice
  const addRandomUser = async () => {
    const originalUsers = [...users]
    const newUser = {
      id: new Date().getTime(),
      name: 'User' + Math.random().toString(),
    }
    setUsers([...users, newUser])

    try {
      // server will response back with newUser
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/users/',
        newUser
      )
      setUsers([...users, res.data]) // # since we setUsers with user from the server, duplicate key
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers)
    }
  }

  if (isLoading) return <div className='spinner-border'></div>

  return (
    <div className='mt-5 container'>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading}

      {/* # */}
      <button className='mt-2 btn btn-primary' onClick={addRandomUser}>
        Add Random User
      </button>
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
              }}
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
