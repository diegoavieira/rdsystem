import React from 'react';
import { withStyles } from '@material-ui/core';
import { RdsContainer as MuiRdsContainer, RdsMarked } from '@rdsystem/common';

const RdsContainer = withStyles(() => ({
  root: {
    paddingTop: 0
  }
}))(MuiRdsContainer);

const GettingStarted = () => {
  return (
    <RdsContainer>
      <RdsMarked file="src/docs/getting-started/getting-started.md" />
    </RdsContainer>
  );
};

export default GettingStarted;
