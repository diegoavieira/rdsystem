import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import RdsHeaderStyles from './RdsHeader.styles';
import RdsHeaderProps from './RdsHeader.props';

const RdsHeader: FC<RdsHeaderProps> = ({ title, fixed, color }): JSX.Element => {
  const styles = RdsHeaderStyles();

  return (
    <>
      <AppBar data-testid="rdsheader" position={fixed ? 'fixed' : 'static'}>
        <Toolbar color={color}>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {fixed && <div className={styles.fixed} />}
    </>
  );
};

export default RdsHeader;
