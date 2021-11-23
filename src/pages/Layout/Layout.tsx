import React from 'react';
import { RdsContainer, RdsMarked } from '@rdsystem/common';
import { layout } from '@docs';

const Layout = () => {
  return (
    <RdsContainer>
      <RdsMarked file="src/docs/layout/layout.md" sandboxes={layout} />
    </RdsContainer>
  );
};

export default Layout;
