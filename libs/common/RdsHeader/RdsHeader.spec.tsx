import React from 'react';
import { render } from '@testing-library/react';
import RdsHeader from './RdsHeader';

describe('<RdsHeader />', () => {
  test('should has title props', () => {
    const title = 'Title';
    const { getByText } = render(<RdsHeader title={title} />);
    expect(getByText(/Title/)).toBeInTheDocument();
  });

  test('should has fixed props', () => {
    const title = 'Title';
    const { getByTestId } = render(<RdsHeader title={title} fixed />);
    expect(getByTestId(/rdsheader/)).toHaveClass('mui-fixed');
  });
});
