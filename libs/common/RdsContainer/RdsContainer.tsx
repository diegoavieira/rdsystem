import React, { FC } from 'react';
import { Container, withStyles } from '@material-ui/core';
import RdsContainerProps from './RdsContainer.props';
import RdsContainerStyles from './RdsContainer.styles';
import clsx from 'clsx';

/**
 * [RdsContainer Examples](https://diegoavieira.github.io/rdsystem/common/rds-container)
 */
const RdsContainer: FC<RdsContainerProps> = ({ children, maxWidth, disableGutters, classes }) => {
  return (
    <Container
      className={clsx(classes.root, { [classes.disableGutters]: disableGutters })}
      maxWidth={maxWidth ?? 'md'}
      disableGutters={disableGutters}
    >
      {children}
    </Container>
  );
};

export default withStyles(RdsContainerStyles, { name: 'RdsContainer' })(RdsContainer);
