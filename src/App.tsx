import {useEffect, useState} from 'react';
import useLocalStorage from 'use-local-storage';
import './App.styles.scss';

// toastify setup
import 'react-toastify/dist/ReactToastify.css';

import {ToastifyContainer, Toggle} from 'components';
import {AppRoutes} from 'routes';
import {useAppSelector} from 'hooks';
import {selectTheme} from "./store";

function App() {
    const {newTheme} = useAppSelector(selectTheme);
    return (
        <div role={'application'} className={'app'}
             data-theme={newTheme}>
            <AppRoutes/>
            <ToastifyContainer/>
        </div>
    );
}

export default App;
