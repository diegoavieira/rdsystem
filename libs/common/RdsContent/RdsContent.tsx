import React, { FC } from 'react';
import { CssBaseline, withStyles } from '@material-ui/core';
import RdsContentProps from './RdsContent.props';
import RdsContentStyles from './RdsContent.styles';
import clsx from 'clsx';

/**
 * [RdsContent Examples](https://diegoavieira.github.io/rdsystem/common/rds-content)
 */
const RdsContent: FC<RdsContentProps> = ({ children, hasDrawer, hasHeaderFixed, hasFooter, classes }) => {
  return (
    <div
      className={clsx(classes.root, {
        [classes.hasDrawer]: hasDrawer,
        [classes.hasHeaderFixed]: hasHeaderFixed,
        [classes.hasFooter]: hasFooter
      })}
    >
      <CssBaseline />
      {children}
    </div>
  );
};

export default withStyles(RdsContentStyles, { name: 'RdsContent' })(RdsContent);
