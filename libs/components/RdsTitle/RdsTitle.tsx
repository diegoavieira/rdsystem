import React, { FC } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import RdsTitleProps from './RdsTitle.props';
import RdsTitleStyles from './RdsTitle.styles';
import clsx from 'clsx';

/**
 * [RdsTitle Examples](https://diegoavieira.github.io/rdsystem/components/rds-title)
 */
const RdsTitle: FC<RdsTitleProps> = ({ classes, type, children, color, light }) => {
  return (
    <Typography
      data-testid="rds-title"
      className={clsx(classes.root, { [classes.light]: light })}
      component={type || 'h1'}
      variant={type === 'h2' || type === 'span' ? 'h6' : 'h5'}
      color={color}
    >
      {children}
    </Typography>
  );
};

export default withStyles(RdsTitleStyles, { name: 'RdsTitle' })(RdsTitle);
