import * as React from 'react'
import {useState} from 'react'

import css from './App.module.scss'
import {Input, Checkbox, Modal} from './components'
import cn from 'classnames'

function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Modal>{<div><img src={'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1'}/></div>}</Modal>
            </div>
        </div>
    )
}
export default App
