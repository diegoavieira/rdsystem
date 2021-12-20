import React from 'react';
import { render } from '@testing-library/react';
import RdsField from './RdsField';

describe('<RdsField />', () => {
  test('should has rendered', () => {
    render(<RdsField name="test" />);
  });
});
