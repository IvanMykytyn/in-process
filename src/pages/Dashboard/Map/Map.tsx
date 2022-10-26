import { FC } from 'react'

// styles
import cn from 'classnames'
import css from './map.module.scss'

import {BookingForm, Modal } from 'components'

const Map: FC = () => {
  return (
    <div>
      <Modal label={'Book'}>
        <BookingForm/>
      </Modal>
    </div>
  )
}

export { Map }
