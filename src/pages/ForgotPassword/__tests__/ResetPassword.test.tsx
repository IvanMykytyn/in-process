import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';
import { ResetPassword } from '../ResetPassword';

const setup = () => {
  renderWithProviders(
    <Router>
      <ResetPassword />
    </Router>
  );
};

describe('Test Reset Password page', () => {
  it('should render the component with no errors', async () => {
    setup();

    const component = await screen.findByTestId('reset-password-page');

    expect(component).toBeInTheDocument();
  });

  it('should enter input values and click submit', async () => {
    setup();

    const inputPassword = screen.getByLabelText('password');
    const inputConfirmPassword = screen.getByLabelText('confirmPassword');

    const submit = screen.getByRole('button', { name: /Reset Password/i });

    await userEvent.type(inputPassword, 'Password1');
    await userEvent.type(inputConfirmPassword, 'Password1');

    expect(inputPassword).toHaveValue('Password1');
    expect(inputConfirmPassword).toHaveValue('Password1');

    fireEvent.click(submit);
  });
});
