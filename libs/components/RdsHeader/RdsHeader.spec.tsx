import React from 'react';
import { render } from '@testing-library/react';
import RdsHeader from './RdsHeader';

describe('<RdsHeader />', () => {
  test('should has one child element', () => {
    const { getByTestId } = render(
      <RdsHeader>
        <div />
      </RdsHeader>
    );

    expect(getByTestId('rds-header').childElementCount).toBe(1);
  });

  test('should prop fixed to be true', () => {
    const { getByTestId } = render(
      <RdsHeader fixed>
        <div />
      </RdsHeader>
    );

    expect(getByTestId('rds-header').className).toContain('positionFixed');
  });
});
