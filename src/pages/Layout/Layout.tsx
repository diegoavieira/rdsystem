import React from 'react';
import { withStyles } from '@material-ui/core';
import { RdsContainer as MuiRdsContainer, RdsMarked } from '@rdsystem/common';
import { layout } from '@docs';

const RdsContainer = withStyles(() => ({
  root: {
    paddingTop: 0
  }
}))(MuiRdsContainer);

const Layout = () => {
  return (
    <RdsContainer>
      <RdsMarked file="src/docs/layout/layout.md" sandboxes={layout} />
    </RdsContainer>
  );
};

export default Layout;
