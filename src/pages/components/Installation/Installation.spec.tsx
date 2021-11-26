import React from 'react';
import { render } from '@testing-library/react';
import Installation from './Installation';

describe('<Installation />', () => {
  test('should has rendered', () => {
    render(<Installation />);
  });
});
