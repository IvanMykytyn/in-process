import * as React from 'react';

import css from './App.module.scss';

function App() {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <button className={css.circle} type={'button'}>Button</button>
            </div>
        </div>
    );
}

export default App;
