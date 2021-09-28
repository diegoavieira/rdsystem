import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AppRouter from './App.router';

describe('<AppRouter />', () => {
  test('should rendered route /', async () => {
    const { getByTestId } = render(<AppRouter />);
    await waitFor(() => expect(getByTestId(/Dashboard/)).toBeTruthy());
  });
});
