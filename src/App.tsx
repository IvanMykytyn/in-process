import * as React from 'react'

import css from './App.module.scss'
import { Input } from './components'
import { LockOpen, Mail, Check, Password } from '@mui/icons-material'

function App() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css['inputs-wrapper']}>
          <h1>Inputs</h1>
          <Input type="text" label="Default" />
          <Input type="text" label="Disabled" disabled />
          <Input type="email" label="Input" helperText={'With Helper Text'} />
          <Input type="password" label="type Password" />

          <Input
            type="text"
            label="With Error"
            error
            helperText={'Invalid Value. Please, try again!'}
          />
          <Input type="text" icon={LockOpen} label="Default" />
          <Input type="text" icon={Mail} label="Disabled" disabled />
          <Input type="password" icon={Password} label="type Password" />

          <Input
            type="text"
            label="With Error"
            icon={Check}
            error
            helperText={'Invalid Value. Please, try again!'}
          />
        </div>
      </div>
    </div>
  )
}

export default App
