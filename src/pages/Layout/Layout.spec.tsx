import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('<Layout />', () => {
  test('should has rendered', () => {
    render(<Layout />);
  });
});
