import React from 'react';
import { render } from '@testing-library/react';
import RdsContainer from './RdsContainer';

describe('<RdsContainer />', () => {
  test('should has one child element', () => {
    const { getByTestId } = render(
      <RdsContainer>
        <div />
      </RdsContainer>
    );

    expect(getByTestId('rds-container').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    const { getByTestId } = render(
      <RdsContainer>
        <div />
        <p />
      </RdsContainer>
    );

    expect(getByTestId('rds-container').childElementCount).toBe(2);
  });

  test('should disableGutters prop is true', () => {
    const { getByTestId } = render(
      <RdsContainer disableGutters>
        <div />
      </RdsContainer>
    );

    expect(getByTestId('rds-container').className).toContain('RdsContainer-disableGutters');
  });
});
