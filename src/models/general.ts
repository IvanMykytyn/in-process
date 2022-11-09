import React from 'react'
import { AxiosResponse } from 'axios'

type AxiosRes<T> = Promise<AxiosResponse<T>>
type SetStateType<T> =  React.Dispatch<React.SetStateAction<T>>

interface ErrorMessageObject {
  statusCode: number,
  message: string
  error: string
}


export type { AxiosRes, ErrorMessageObject, SetStateType }
