/*
  Extracting the User Service
  - each file should do its own stuffs -> move code that connect to server to a separate file
    -> separate concerns
    -> easier to test
  - this just works when we use .then() and .catch()

  1. services/userService.ts


*/

import { useEffect, useState } from 'react'
import { AxiosError, CanceledError } from './services/api-client'
import { type User, UserService } from './services/userService'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const userService = new UserService()

  useEffect(() => {
    const { res, cancel } = userService.getAllUsers() // #
    setIsLoading(true)
    res
      .then((res) => {
        setUsers(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError((err as AxiosError).message)
        setIsLoading(false)
      })

    return () => cancel()
  }, [])

  const deleteUser = async (id: number) => {
    const originalUsers = [...users]
    setUsers(users.filter((user) => user.id !== id))

    // #
    userService.deleteUser(id).catch((err) => {
      setError((err as AxiosError).message)
      setUsers(originalUsers)
    })
  }

  const addRandomUser = async () => {
    const originalUsers = [...users]
    const newUser = {
      id: new Date().getTime(),
      name: 'User' + new Date().getTime(),
    }
    setUsers([...users, newUser])

    // #
    userService
      .addUser(newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setError((err as AxiosError).message)
        setUsers(originalUsers)
      })
  }

  const updateUser = async (user: User) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: 'Updated ' + user.name }
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))

    // #
    userService
      .updateUser(updatedUser)
      .then((res) =>
        setUsers(users.map((u) => (u.id === user.id ? res.data : u)))
      )
      .catch((err) => {
        setError((err as AxiosError).message)
        setUsers(originalUsers)
      })
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
