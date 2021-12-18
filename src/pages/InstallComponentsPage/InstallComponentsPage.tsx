import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';

const InstallComponentsPage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/components/installation/installation.md" />
    </RdsContainer>
  );
};

export default InstallComponentsPage;
