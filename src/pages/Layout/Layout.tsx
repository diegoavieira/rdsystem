import React from 'react';
import { RdsContainer } from '@rdsystem/common';
import { Marked } from '@components';
import { layout } from '@docs';

const Layout = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/layout/layout.md" sandboxes={layout} />
    </RdsContainer>
  );
};

export default Layout;
