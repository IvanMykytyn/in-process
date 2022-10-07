import * as React from 'react';

import css from './App.module.scss';
import {Button} from "./components";

function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <button className={css.circle} type={'button'}>Button</button>
                <Button>click</Button>
            </div>
        </div>
    );
}

export default App;
