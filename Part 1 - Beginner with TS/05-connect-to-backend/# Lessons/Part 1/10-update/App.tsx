/*
  Updating Data



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

  const addRandomUser = async () => {
    const originalUsers = [...users]
    const newUser = {
      id: new Date().getTime(),
      name: 'User' + Math.random().toString(),
    }
    setUsers([...users, newUser])

    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/users/',
        newUser
      )
      setUsers([...users, res.data])
    } catch (error) {
      setError((error as AxiosError).message)
      setUsers(originalUsers)
    }
  }

  // # update user
  const updateUser = async (user: User) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: 'Updated ' + user.name }
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))

    try {
      await axios.patch(
        'https://jsonplaceholder.typicode.com/users/' + user.id,
        updatedUser
      )
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
            <div>
              <button
                className='btn btn-secondary btn-sm ms-2'
                onClick={() => {
                  updateUser(user)
                }}
              >
                Update
              </button>
              <button
                className='btn btn-danger btn-sm ms-2'
                onClick={() => {
                  deleteUser(user.id)
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
