import React from 'react'
import { AxiosResponse } from 'axios'

type PromiseResponse<T> = Promise<AxiosResponse<T>>
type SetStateType<T> =  React.Dispatch<React.SetStateAction<T>>

interface ErrorMessageObject {
  statusCode: number,
  message: string
  error: string
}


export type { PromiseResponse, ErrorMessageObject, SetStateType }
