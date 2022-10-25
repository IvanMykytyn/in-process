import { FC } from 'react'
import './checkbox.styles.scss'
import cn from 'classnames'

import { Checkbox as CheckboxMui, CheckboxProps } from '@mui/material'
import { Check } from '@mui/icons-material'

interface customCheckboxProps {
  circled?: boolean
}

const Checkbox: FC<CheckboxProps & customCheckboxProps> = ({ circled, ...rest }) => {
  return (
    <div className={cn({ 'custom-checkbox__wrapper': true, circled })}>
      <CheckboxMui {...rest} checkedIcon={<Check />} />
    </div>
  )
}

export {Checkbox};

