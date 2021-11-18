import React from 'react';
import { render } from '@testing-library/react';
import RdsFrame from './RdsFrame';

describe('<RdsFrame />', () => {
  test('should has rendered', () => {
    render(
      <RdsFrame>
        <p></p>
      </RdsFrame>
    );
  });
});
