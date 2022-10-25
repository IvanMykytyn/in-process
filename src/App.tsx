import * as React from 'react';
import cn from 'classnames';
import './App.styles.scss';

// toastify setup
import 'react-toastify/dist/ReactToastify.css';

import {ToastifyContainer} from 'components';
import {AppRoutes} from 'routes';
import { DashboardLayout } from 'pages/Dashboard/DashboardLayout/DashboardLayout';

function App() {
    return (
        <>
            <AppRoutes/>
            <ToastifyContainer/>
        </>
    );
}

export default App;
