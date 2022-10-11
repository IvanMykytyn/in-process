import { FC } from 'react'
import { Chip, ChipProps } from '@mui/material'
import './badge.styles.scss'

const Badge: FC<ChipProps> = ({ label, ...rest }) => {
  return (
    <div className="badge-wrapper">
      <Chip label={label} {...rest} />
    </div>
  )
}

export default Badge
