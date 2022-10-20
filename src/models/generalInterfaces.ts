import { AxiosResponse } from 'axios'

type PromiseResponse = Promise<AxiosResponse<any, any>>

interface ErrorMessageObject {
  statusCode: number,
  message: string
  error: string
}

export type { PromiseResponse, ErrorMessageObject }
