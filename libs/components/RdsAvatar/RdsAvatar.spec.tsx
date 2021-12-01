import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsAvatar from './RdsAvatar';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

const items: RdsListItemProps['item'][] = [
  {
    key: 'primary',
    primary: 'Primary',
    action: (item) => console.log(item)
  }
];

describe('<RdsAvatar />', () => {
  test('should has prop items', () => {
    render(<RdsAvatar items={items} />);

    fireEvent.click(screen.getByTestId('rds-avatar'));
    expect(screen.getByText(/primary/i)).toBeDefined();

    fireEvent.click(screen.getByText(/primary/i));
  });

  test('should not has prop items', () => {
    render(<RdsAvatar />);
  });
});
