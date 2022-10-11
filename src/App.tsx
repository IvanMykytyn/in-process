import React, {FC} from 'react';

import css from './App.module.scss';
import {Button,ButtonLoading} from "./components";

const App: FC = () => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <Button>Click me</Button>
                <ButtonLoading>Save</ButtonLoading>
            </div>
        </div>
    );
}

export default App;
