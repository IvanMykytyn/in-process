<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App'
import {setupStore} from './store'
=======
import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { store } from './store/store';
import { Provider } from 'react-redux';
>>>>>>> develop

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore();

root.render(
<<<<<<< HEAD
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
=======
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
>>>>>>> develop
