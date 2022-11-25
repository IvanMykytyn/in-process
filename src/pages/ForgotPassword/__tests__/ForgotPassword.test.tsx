import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/tests/test-utils';

import { BrowserRouter as Router } from 'react-router-dom';

import { ForgotPassword } from '../ForgotPassword';
import userEvent from '@testing-library/user-event';

const setup = () => {
  renderWithProviders(
    <Router>
      <ForgotPassword />
    </Router>
  );
};

describe('Test Forgot Password page', () => {
  it('should render the component with no errors', async () => {
    setup();

    const component = await screen.findByTestId('forgot-password-page');

    expect(component).toBeInTheDocument();
  });

  it('should enter input values and click submit', async () => {
    setup();

    const input = screen.getByLabelText('email');
    const submit = screen.getByRole('button', { name: /Reset Password/i });

    await userEvent.type(input, 'roman@incorainc.com');

    expect(input).toHaveValue('roman@incorainc.com');

    fireEvent.click(submit);
  });
});
