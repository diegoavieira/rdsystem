import React from 'react';
import { render } from '@testing-library/react';
import RdsTheme from './RdsTheme';

describe('<RdsTheme />', () => {
  test('should has rendered', () => {
    render(
      <RdsTheme>
        <p></p>
      </RdsTheme>
    );
  });
});
