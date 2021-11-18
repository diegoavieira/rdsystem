import React from 'react';
import { render } from '@testing-library/react';
import RdsDrawer from './RdsDrawer';

describe('<RdsDrawer />', () => {
  test('should has rendered', () => {
    render(
      <RdsDrawer>
        <nav></nav>
      </RdsDrawer>
    );
  });
});
