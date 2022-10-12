import { FC } from 'react'
import cn from 'classnames'
import { TextField, TextFieldProps } from '@mui/material'

import './input.styles.scss'
import PasswordInput from './PasswordInput'

const Input: FC<TextFieldProps> = ({ type, error, fullWidth, ...rest }) => {
  return (
    <div
      className={cn('text-field', {
        'text-field__password': type === 'password',
        'text-field__error': error,
        'text-field__full-width': fullWidth,
      })}>
      {type === 'password' ? (
        <PasswordInput error={error} {...rest} fullWidth={fullWidth} />
      ) : (
        <TextField type={type} variant="outlined" fullWidth={fullWidth} {...rest} />
      )}
    </div>
  )
}

export {Input}
