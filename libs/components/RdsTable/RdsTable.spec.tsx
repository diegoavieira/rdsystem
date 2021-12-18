import React from 'react';
import { render } from '@testing-library/react';
import RdsTable from './RdsTable';

describe('<RdsTable />', () => {
  test('should has rendered', () => {
    render(<RdsTable />);
  });
});
