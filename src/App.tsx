import * as React from 'react';

import css from './App.module.scss';

import {FirstCalendar, SecondCalendar} from './components';


function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                    <SecondCalendar/>
                    <FirstCalendar/>
            </div>
        </div>
    );
}

export default App;
