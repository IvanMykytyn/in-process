import * as React from 'react'
import cn from 'classnames'

import css from './App.module.scss'

import {Input, Checkbox} from './components'

function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <h1>Inputs</h1>
                <Input type="text" label="Default"/>
                <Input type="text" label="Disabled" disabled fullWidth/>
                <Input type="email" label="Input" helperText={'With Helper Text'}/>
                <Input type="password" label="type Password" fullWidth/>
                <Input
                    type="text"
                    label="With Error"
                    error
                    helperText={'Invalid Value. Please, try again!'}
                />
            </div>
            <h1>Checkboxes</h1>
            <div className={cn(css.wrapper, css['checkboxes-wrapper'])}>
                <Checkbox defaultChecked/>
                <Checkbox/>
                <Checkbox disabled/>
                <Checkbox disabled checked/>
            </div>
            <div className={cn(css.wrapper, css['checkboxes-wrapper'])}>
                <Checkbox circled defaultChecked/>
                <Checkbox circled/>
                <Checkbox circled disabled/>
                <Checkbox circled disabled checked/>
            </div>
        </div>
    )
}
export default App
