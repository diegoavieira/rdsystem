import React from 'react';
import { render } from '@testing-library/react';
import RdsNav from './RdsNav';

describe('<RdsNav />', () => {
  test('should has rendered', () => {
    render(<RdsNav items={[{ key: 'test', title: 'Test' }]} />);
  });
});
