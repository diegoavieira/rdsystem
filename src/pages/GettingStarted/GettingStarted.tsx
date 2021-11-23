import React from 'react';
import { RdsContainer } from '@rdsystem/common';
import { Marked } from '@components';

const GettingStarted = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/getting-started/getting-started.md" />
    </RdsContainer>
  );
};

export default GettingStarted;
