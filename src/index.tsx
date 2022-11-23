import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { setupStore } from './store';
import { Provider } from 'react-redux';
import { setupAxiosInterceptors } from 'services';
import { logoutUser } from 'store';

export const store = setupStore();

const { dispatch } = store;
setupAxiosInterceptors(() => {
  dispatch(logoutUser());
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <Router basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  // </React.StrictMode>
);
