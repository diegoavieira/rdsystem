import React, { ReactElement } from 'react';
import { RdsHeader } from '@rdsystem/common';
import AppRouter from './App.router';
import AppTheme from './App.theme';

const App = (): ReactElement => (
  <AppTheme>
    <RdsHeader title="React Design System" fixed />
    <AppRouter />
  </AppTheme>
);

export default App;
