import axios, { AxiosError, CanceledError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {},
})

export { AxiosError, CanceledError }
