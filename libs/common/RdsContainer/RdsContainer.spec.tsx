import React from 'react';
import { render } from '@testing-library/react';
import RdsContainer from './RdsContainer';

describe('<RdsContainer />', () => {
  test('should has rendered', () => {
    render(
      <RdsContainer>
        <p></p>
      </RdsContainer>
    );
  });
});
