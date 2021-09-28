import React, { lazy, ReactElement, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const production = process.env.NODE_ENV === 'production';

const Dashboard = lazy(() => import('@pages/Dashboard'));

const AppRouter = (): ReactElement => (
  <BrowserRouter basename={production ? '/rdsystem' : '/'}>
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
