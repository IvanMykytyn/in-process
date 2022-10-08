import * as React from 'react'

import css from '@App.module.scss'
import {Input} from '@components/index'

function App() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css['inputs-wrapper']}>
          <h1>Inputs</h1>
          <Input type="text" label="Default" />
          <Input type="text" label="Disabled" disabled fullWidth/>
          <Input type="email" label="Input" helperText={'With Helper Text'} />
          <Input type="password" label="type Password" fullWidth/>
          <Input
            type="text"
            label="With Error"
            error
            helperText={'Invalid Value. Please, try again!'}
          />
        </div>
      </div>
    </div>
  )
}

export default App
