import React from 'react';
import { render } from '@testing-library/react';
import RdsContent from './RdsContent';

describe('<RdsContent />', () => {
  test('should has one child element', () => {
    const { getByTestId } = render(
      <RdsContent>
        <div />
      </RdsContent>
    );

    expect(getByTestId('rds-content').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    const { getByTestId } = render(
      <RdsContent>
        <div />
        <p />
      </RdsContent>
    );

    expect(getByTestId('rds-content').childElementCount).toBe(2);
  });

  test('should prop hasHeaderFixed to be true', () => {
    const { getByTestId } = render(
      <RdsContent hasHeaderFixed>
        <div />
      </RdsContent>
    );

    expect(getByTestId('rds-content').className).toContain('RdsContent-hasHeaderFixed');
  });

  test('should prop hasDrawer to be true', () => {
    const { getByTestId } = render(
      <RdsContent hasDrawer>
        <div />
      </RdsContent>
    );

    expect(getByTestId('rds-content').className).toContain('RdsContent-hasDrawer');
  });

  test('should prop hasFooter to be true', () => {
    const { getByTestId } = render(
      <RdsContent hasFooter>
        <div />
      </RdsContent>
    );

    expect(getByTestId('rds-content').className).toContain('RdsContent-hasFooter');
  });
});
