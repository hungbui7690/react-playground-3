import { axiosInstance } from './api-client'

// NO NEED THIS
// export interface User {
//   id: number
//   name: string
// }

interface Entity {
  id: number
}

// CHANGE TO HttpService
class HttpService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  // change to generic -> T
  getAll<T>() {
    const controller = new AbortController()
    const res = axiosInstance.get<T[]>(this.endpoint, {
      signal: controller.signal,
    })

    return { res, cancel: () => controller.abort() }
  }
  delete(id: number) {
    return axiosInstance.delete(this.endpoint + '/' + id)
  }

  // change param from user to something generic -> entity
  add<T>(entity: T) {
    return axiosInstance.post(this.endpoint, entity)
  }

  // need to add constraint to this one
  update<T extends Entity>(entity: T) {
    return axiosInstance.patch(this.endpoint + '/' + entity.id, entity)
  }
}

// export default new HttpService('/users') // # Method 1

// # Method 2
const create = (endpoint: string) => new HttpService(endpoint)
export default create
