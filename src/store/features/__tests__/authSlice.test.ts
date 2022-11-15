import reducer, { clearUser, initialState } from '../authSlice';
import type { AuthState } from '../authSlice';
import { setupStore } from 'store/store';
import { setToLocalStorage } from 'utils';
import { act } from 'react-dom/test-utils';
import { changePassword, getMe } from 'store/thunk';

describe('Auth Slice testing', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should clear User from store', () => {
    const previousState: AuthState = {
      user: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'test@incorainc.com',
        role: 'user',
      },
      isLoading: false,
      error: '',
      notifyId: '',
    };

    expect(reducer(previousState, clearUser())).toEqual(initialState);
  });

  it('should get Me, if token exist', async () => {
    const store = setupStore();
    setToLocalStorage('token', 'TOKEN');

    await act(async () => {
      await store.dispatch(getMe());
    });

    const user = store.getState().auth.user;

    const email = user?.email;
    const firstName = user?.firstName;

    expect(email).toEqual('roman@incorainc.com');
    expect(firstName).toEqual('Roman');
  });

  it('should change user password, if token exist', async () => {
    const store = setupStore();
    setToLocalStorage('token', 'TOKEN');

    await act(async () => {
      await store.dispatch(getMe());
    });
    
    const user = store.getState().auth.user;
    const email = user?.email;
    expect(email).toEqual('roman@incorainc.com');

    await act(async () => {
      await store.dispatch(changePassword({ newPassword: 'Password' }));
    });

    const userAfter = store.getState().auth.user;
    const emailAfter = userAfter?.email;
    expect(emailAfter).toEqual('roman@incorainc.com');
  });
});
