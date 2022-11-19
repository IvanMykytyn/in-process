import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders  Button', () => {
  render(<Button type={'button'}>Test Text</Button>);
  const buttonElement = screen.getByText(/Test Text/i);
  expect(buttonElement).toBeInTheDocument();
});
