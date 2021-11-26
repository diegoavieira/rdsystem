import React, { FC } from 'react';
import { AppBar, Toolbar as MuiToolbar, IconButton, withStyles, createStyles, Theme } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import RdsHeaderProps from './RdsHeader.props';
import RdsHeaderStyles from './RdsHeader.styles';

const Toolbar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 56,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  })
)(MuiToolbar);

/**
 * [RdsHeader Examples](https://diegoavieira.github.io/rdsystem/components/rds-header)
 */
const RdsHeader: FC<RdsHeaderProps> = ({ children, fixed, color, onToggle, classes }) => {
  return (
    <AppBar data-testid="rds-header" className={classes.root} position={fixed ? 'fixed' : 'static'} color={color}>
      <Toolbar>
        {onToggle && (
          <IconButton edge="start" className={classes.toggle} color="inherit" onClick={onToggle}>
            <MenuIcon />
          </IconButton>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(RdsHeaderStyles, { name: 'RdsHeader' })(RdsHeader);
