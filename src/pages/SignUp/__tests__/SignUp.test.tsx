import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from 'utils/tests/test-utils';

import { initialUserState, signUpUser, setupStore, logoutUser } from 'store';
import { userService} from 'services';
import { removeFromLocalStorage } from 'utils';

import { SignUp } from '../SignUp';
import { act } from 'react-dom/test-utils';

const setup = () => {
  renderWithProviders(
    <Router>
      <SignUp />
    </Router>
  );
};

describe('Test Sign up page', () => {
  it('should render the component with no errors', async () => {
    setup();

    const component = await screen.findByTestId('signUp-page');

    expect(component).toBeInTheDocument();
  });
  const componentList = ['submit-button', 'signUp-form', 'link-to-login'];

  componentList.forEach((item) => {
    it(`should render ${item} component`, async () => {
      setup();
      const component = await screen.findByTestId(item);
      expect(component).toBeTruthy();
    });
  });

  it('should sign up, logout user and set proper values', async () => {
    removeFromLocalStorage('token');
    const storeSetup = setupStore();
    const { store } = renderWithProviders(
      <Router>
        <SignUp />
      </Router>,
      { store: storeSetup }
    );
    await act(async () => {
      await store.dispatch(
        signUpUser({
          firstName: 'Roman',
          lastName: 'Yu',
          password: 'Password',
          id: 'id',
        })
      );
    });
    const user = store.getState().auth.user;

    const email = user?.email;
    const firstName = user?.firstName;

    expect(email).toEqual('roman@incorainc.com');
    expect(firstName).toEqual('Roman');
    expect(userService.isLoggedIn()).toBeTruthy();

    await act(async () => {
      await store.dispatch(logoutUser());
    });

    const userAfterLogout = store.getState().auth.user;

    expect(userAfterLogout).toEqual(initialUserState.user);
    expect(userService.isLoggedIn()).toBeFalsy();
  });
});
