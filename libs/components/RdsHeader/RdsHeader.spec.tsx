import React from 'react';
import { render } from '@testing-library/react';
import RdsHeader from './RdsHeader';

describe('<RdsHeader />', () => {
  test('should has rendered', () => {
    render(<RdsHeader />);
  });
});
