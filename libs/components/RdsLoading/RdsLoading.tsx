import React, { FC } from 'react';
import { withStyles, Backdrop, CircularProgress } from '@material-ui/core';
import RdsLoadingProps from './RdsLoading.props';
import RdsLoadingStyles from './RdsLoading.styles';

/**
 * [RdsLoading Examples](https://diegoavieira.github.io/rdsystem/components/rds-loading)
 */
const RdsLoading: FC<RdsLoadingProps> = ({ classes, toggle = true }) => {
  return (
    <Backdrop data-testid="rds-loading" className={classes.root} open={toggle}>
      <CircularProgress />
    </Backdrop>
  );
};

export default withStyles(RdsLoadingStyles, { name: 'RdsLoading' })(RdsLoading);
