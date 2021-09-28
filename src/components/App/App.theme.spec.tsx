import React from 'react';
import { render } from '@testing-library/react';
import AppTheme from './App.theme';

describe('<AppTheme />', () => {
  test('should has children props', () => {
    render(
      <AppTheme>
        <div />
      </AppTheme>
    );
  });
});
