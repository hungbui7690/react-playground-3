import { axiosInstance } from './api-client'

interface Entity {
  id: number
}

class HttpService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

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

  add<T>(entity: T) {
    return axiosInstance.post(this.endpoint, entity)
  }

  update<T extends Entity>(entity: T) {
    return axiosInstance.patch(this.endpoint + '/' + entity.id, entity)
  }
}

const create = (endpoint: string) => new HttpService(endpoint)
export default create
