import React from 'react';
import { render } from '@testing-library/react';
import GettingStarted from './GettingStarted';

describe('<GettingStarted />', () => {
  test('should has rendered', () => {
    render(<GettingStarted />);
  });
});
