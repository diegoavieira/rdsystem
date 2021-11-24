import React from 'react';
import { render } from '@testing-library/react';
import RdsMain from './RdsMain';

describe('<RdsMain />', () => {
  test('should has one child element', () => {
    const { getByTestId } = render(
      <RdsMain>
        <div />
      </RdsMain>
    );

    expect(getByTestId('rds-main').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    const { getByTestId } = render(
      <RdsMain>
        <div />
        <p />
      </RdsMain>
    );

    expect(getByTestId('rds-main').childElementCount).toBe(2);
  });

  test('should prop hasHeaderFixed to be true', () => {
    const { getByTestId } = render(
      <RdsMain fixed>
        <div />
      </RdsMain>
    );

    expect(getByTestId('rds-main').className).toContain('RdsMain-fixed');
  });
});
