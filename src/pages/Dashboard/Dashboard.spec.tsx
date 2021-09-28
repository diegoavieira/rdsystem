import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  test('should rendered Dashboard', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId(/Dashboard/)).toBeTruthy();
  });
});
