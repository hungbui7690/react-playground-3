import { useEffect, useState } from 'react'
import userService, { type User } from '../services/userService'
import { AxiosError, CanceledError } from 'axios'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const { res, cancel } = userService.getAll<User>()
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

  return { users, setUsers, error, setError, isLoading, setIsLoading }
}
