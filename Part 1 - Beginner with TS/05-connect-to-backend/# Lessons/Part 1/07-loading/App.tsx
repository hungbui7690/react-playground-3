/*
  Showing a Loading Indicator


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
  const [isLoading, setIsLoading] = useState(false) // 1.

  useEffect(() => {
    const controller = new AbortController()

    const fetchUsers = async () => {
      setIsLoading(true) // 2.

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
        if (!controller.signal.aborted) setIsLoading(false) // 3. # must use this -> otherwise, loading won't work
      }
    }
    fetchUsers()

    return () => controller.abort()
  }, [])

  if (isLoading) return <div className='spinner-border'></div>

  return (
    <div className='mt-5 container'>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading}
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
