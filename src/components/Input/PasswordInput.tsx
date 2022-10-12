import React, { FC } from 'react'
import { InputAdornment, IconButton, TextField, TextFieldProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface StateProps {
  showPassword: boolean
}

const PasswordInput: FC<TextFieldProps> = ({ ...rest }) => {
  const [values, setValues] = React.useState<StateProps>({
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <TextField
      type={values.showPassword ? 'text' : 'password'}
      variant="outlined"
      {...rest}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              disabled={rest?.disabled}>
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput
