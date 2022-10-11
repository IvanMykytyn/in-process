import * as React from 'react';

import css from './App.module.scss';

import {MainCalendar} from './components';


function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <MainCalendar/>
            </div>
        </div>
    );
}

export default App;
