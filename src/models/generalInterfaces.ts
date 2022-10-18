import { AxiosResponse } from 'axios'

type PromiseResponse = Promise<AxiosResponse<any, any>>

interface ErrorMessageObject {
  error: string
}

export type { PromiseResponse, ErrorMessageObject }
