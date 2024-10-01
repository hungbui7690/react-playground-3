/*
  Creating a Custom Data Fetching Hook



*/

import { AxiosError } from './services/api-client'
import userService, { type User } from './services/userService'
import { useUsers } from './hooks/useUsers'

function App() {
  const { users, error, setError, isLoading, setUsers } = useUsers()

  const deleteUser = async (id: number) => {
    const originalUsers = [...users]
    setUsers(users.filter((user) => user.id !== id))

    userService.delete(id).catch((err) => {
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

    userService
      .add(newUser)
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

    userService
      .update(updatedUser)
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
