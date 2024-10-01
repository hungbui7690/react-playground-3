import { axiosInstance } from './api-client'

export interface User {
  id: number
  name: string
}

export class UserService {
  getAllUsers() {
    const controller = new AbortController()
    const res = axiosInstance.get<User[]>('/users', {
      signal: controller.signal,
    })

    return { res, cancel: () => controller.abort() }
  }
  deleteUser(id: number) {
    return axiosInstance.delete('/users/' + id)
  }
  addUser(user: User) {
    return axiosInstance.post('/users/', user)
  }
  updateUser(user: User) {
    return axiosInstance.patch('/users/' + user.id, user)
  }
}
