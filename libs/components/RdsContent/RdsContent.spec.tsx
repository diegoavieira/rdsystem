import React from 'react';
import { render } from '@testing-library/react';
import RdsContent from './RdsContent';

describe('<RdsContent />', () => {
  test('should has rendered', () => {
    render(
      <RdsContent>
        <p></p>
      </RdsContent>
    );
  });
});
