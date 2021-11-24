import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsNav from './RdsNav';

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

const items = [
  {
    key: 'main',
    items: [
      {
        key: 'getting-started',
        title: 'Getting Started',
        path: '/'
      },
      {
        key: 'components',
        title: 'Components',
        items: [
          {
            key: 'installation',
            title: 'Installation',
            path: '/components/installation'
          }
        ]
      }
    ]
  }
];

describe('<RdsNav />', () => {
  test('should has prop items', () => {
    const { getByTestId } = render(<RdsNav items={items} />);
    expect(getByTestId('rds-nav')).toBeDefined();
  });

  test('should onExpanded be called', () => {
    render(<RdsNav items={items} toogle />);

    fireEvent.click(screen.getByText(/components/i));
    expect(screen.getByTestId('rds-nav').contains(screen.getByText(/installation/i))).toBeTruthy();

    fireEvent.click(screen.getByText(/components/i));
  });
});
