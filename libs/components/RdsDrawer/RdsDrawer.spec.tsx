import React from 'react';
import { render } from '@testing-library/react';
import RdsDrawer from './RdsDrawer';

describe('<RdsDrawer />', () => {
  test('should has one child element', () => {
    const { getByTestId } = render(
      <RdsDrawer>
        <div />
      </RdsDrawer>
    );

    expect(getByTestId('rds-drawer').childElementCount).toBe(1);
  });

  test('should prop hasHeaderFixed to be true', () => {
    const { getByTestId } = render(
      <RdsDrawer hasHeaderFixed>
        <div />
      </RdsDrawer>
    );

    const paper = getByTestId('rds-drawer').firstElementChild;

    expect(paper?.className).toContain('RdsDrawer-hasHeaderFixed');
  });

  test('should prop isMobile and toogle to be true', () => {
    const { getByTestId } = render(
      <RdsDrawer toogle isMobile>
        <div />
      </RdsDrawer>
    );

    expect(getByTestId('rds-drawer').className).toContain('RdsDrawer-mobile');
  });

  test('should has prop document', () => {
    const { getByTestId } = render(
      <RdsDrawer document={document}>
        <div />
      </RdsDrawer>
    );

    expect(getByTestId('rds-drawer')).toBeDefined();
  });
});
