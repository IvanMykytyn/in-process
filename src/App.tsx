import * as React from 'react'
import {useState} from 'react'

import css from './App.module.scss'
import {Input, Checkbox, Modal} from './components'
import cn from 'classnames'

function App() {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <button onClick={()=>setModalActive(true)}>Open Modal</button>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    )
}
export default App
