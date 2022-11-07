import * as React from 'react';
import {useState} from 'react';
import useLocalStorage from 'use-local-storage';

import './App.styles.scss';

// toastify setup
import 'react-toastify/dist/ReactToastify.css';

import {ToastifyContainer, Toggle} from 'components';
import {AppRoutes} from 'routes';

function App() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light', 'theme');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className={'app'} data-theme={theme}>
            <button type={'button'} onClick={toggleTheme}>
                {theme === 'light'? 'dark' : 'light'}
            </button>
            <AppRoutes/>
            <ToastifyContainer/>
        </div>
    );
}

export default App;
