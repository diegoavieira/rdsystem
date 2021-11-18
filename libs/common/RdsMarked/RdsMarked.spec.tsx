import React from 'react';
import { render } from '@testing-library/react';
import RdsMarked from './RdsMarked';

describe('<RdsMarked />', () => {
  test('should has rendered', () => {
    render(<RdsMarked file="README.md" />);
  });
});
