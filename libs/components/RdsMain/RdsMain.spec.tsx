import React from 'react';
import { render } from '@testing-library/react';
import RdsMain from './RdsMain';

describe('<RdsMain />', () => {
  test('should has rendered', () => {
    render(
      <RdsMain>
        <p></p>
      </RdsMain>
    );
  });
});
