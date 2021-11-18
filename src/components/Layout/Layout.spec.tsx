import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';
import { Route } from 'react-router-dom';

describe('<Layout />', () => {
  test('should has rendered', () => {
    render(
      <Layout drawerNavItems={[{ key: 'test', title: 'Test' }]}>
        <Route />
      </Layout>
    );
  });
});
