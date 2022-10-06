import * as React from 'react';

import css from './App.module.scss';

import { Calendar } from './components';


function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Calendar/>
            </div>
        </div>
    );
}

export default App;
