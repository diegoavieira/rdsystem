import React from 'react';
import { render } from '@testing-library/react';
import RdsNavItem from './RdsNavItem';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa'
  })
}));

describe('<RdsNavItem />', () => {
  test('should has rendered', () => {
    render(<RdsNavItem item={{ key: 'test', title: 'Test' }} />);
  });
});
