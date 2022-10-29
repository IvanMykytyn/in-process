import * as React from 'react';

import './App.styles.scss';

// toastify setup
import 'react-toastify/dist/ReactToastify.css';

import {ToastifyContainer} from 'components';
import {AppRoutes} from 'routes';

function App() {
    return (
        <>
            <AppRoutes/>
            <ToastifyContainer/>
        </>
    );
}

export default App;
