import React, { FC, useEffect, useState } from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import RdsDrawerProps from './RdsDrawer.props';
import RdsDrawerStyles from './RdsDrawer.styles';
import clsx from 'clsx';

/**
 * [RdsDrawer Examples](https://diegoavieira.github.io/rdsystem/common/rds-drawer)
 */
const RdsDrawer: FC<RdsDrawerProps> = ({ hasHeaderFixed, onToogle, toogle, isMobile, classes, children, document }) => {
  const [variant, setVariant] = useState<'permanent' | 'temporary'>('permanent');

  useEffect(() => {
    setVariant(isMobile ? 'temporary' : 'permanent');
  }, [isMobile]);

  return (
    <Drawer
      container={document && document.body}
      className={clsx(classes.root, !isMobile ? { [classes.open]: toogle, [classes.close]: !toogle } : classes.mobile)}
      variant={variant}
      open={toogle}
      onClose={onToogle}
      classes={{
        paper: clsx(
          classes.paper,
          !isMobile && { [classes.open]: toogle, [classes.close]: !toogle, [classes.hasHeaderFixed]: hasHeaderFixed }
        )
      }}
    >
      {children}
    </Drawer>
  );
};

export default withStyles(RdsDrawerStyles, { name: 'RdsDrawer' })(RdsDrawer);
