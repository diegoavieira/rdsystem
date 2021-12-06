import React from 'react';
import { render } from '@testing-library/react';
import Theme from './Theme';

describe('<Theme />', () => {
  test('should has rendered', () => {
    render(<Theme />);
  });
});
