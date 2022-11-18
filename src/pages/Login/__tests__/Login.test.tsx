import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/tests/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import {authActions, initialUserState, loginUser, logoutUser, setupStore} from 'store';
import { isLoggedIn } from 'services';
import { removeFromLocalStorage } from 'utils';

import { Login } from '../Login';
import { act } from 'react-dom/test-utils';

const setup = () => {
  renderWithProviders(
    <Router>
      <Login />
    </Router>
  );
};

describe('Test login page', () => {
  it('should render the component with no errors', async () => {
    setup();

    const component = await screen.findByTestId('login-page');

    expect(component).toBeInTheDocument();
  });
  const componentList = ['forgot-password-link', 'submit-button', 'login-form'];

  componentList.forEach((item) => {
    it(`should render ${item} component`, async () => {
      setup();
      const component = await screen.findByTestId(item);
      expect(component).toBeTruthy();
    });
  });

  it('should login, logout user and set proper values', async () => {
    removeFromLocalStorage('token');
    const storeSetup = setupStore();
    const { store } = renderWithProviders(
      <Router>
        <Login />
      </Router>,
      { store: storeSetup }
    );

    await act(async () => {
      await store.dispatch(
        authActions.loginUser({ email: 'roman@incorainc.com', password: 'Password' })
      );
    });

    const user = store.getState().auth.user;

    const email = user?.email;
    const firstName = user?.firstName;

    expect(email).toEqual('roman@incorainc.com');
    expect(firstName).toEqual('Roman');
    expect(isLoggedIn()).toBeTruthy();

    await act(async () => {
      await store.dispatch(authActions.logoutUser());
    });

    const userAfterLogout = store.getState().auth.user;

    expect(userAfterLogout).toEqual(initialUserState.user);
    expect(isLoggedIn()).toBeFalsy();
  });
});
