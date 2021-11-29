import React, { FC } from 'react';
import { withStyles } from '@material-ui/core';
import RdsImageProps from './RdsImage.props';
import RdsImageStyles from './RdsImage.styles';

/**
 * [RdsImage Examples](https://diegoavieira.github.io/rdsystem/components/rds-image)
 */
const RdsImage: FC<RdsImageProps> = ({ classes, src, width, height }) => {
  return (
    <img
      data-testid="rds-image"
      className={classes.root}
      src={src}
      alt=""
      style={{ width: width || 'auto', height: height || 'auto' }}
    />
  );
};

export default withStyles(RdsImageStyles, { name: 'RdsImage' })(RdsImage);
