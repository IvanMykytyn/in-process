import { AxiosResponse } from 'axios'

type PromiseResponse<T> = Promise<AxiosResponse<T>>

interface ErrorMessageObject {
  statusCode: number,
  message: string
  error: string
}

export type { PromiseResponse, ErrorMessageObject }
