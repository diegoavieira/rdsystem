import React from 'react';
import { RdsContainer } from '@rdsystem/common';
import { Marked } from '@components';

const GettingStarted = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/common/installation/installation.md" />
    </RdsContainer>
  );
};

export default GettingStarted;
