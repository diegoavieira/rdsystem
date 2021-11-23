import React, { FC, useState } from 'react';
import { Card, IconButton, Collapse, Toolbar, withStyles, Tooltip } from '@material-ui/core';
import { Code as CodeIcon } from '@material-ui/icons';
import SandboxProps from './Sandbox.props';
import SandboxStyles from './Sandbox.styles';
import { Frame } from '@components';
import clsx from 'clsx';

const Sandbox: FC<SandboxProps> = ({ demo, code, bg, frame, classes }) => {
  const [expanded, setExpanded] = useState(!demo);

  return (
    <div className={classes.root}>
      <Card className={clsx(classes.demo, { [classes.bg]: bg })} variant="outlined">
        {frame ? <Frame>{demo}</Frame> : demo}
      </Card>
      <Toolbar className={classes.toolbar} variant="dense">
        <Tooltip arrow title="Code">
          <IconButton onClick={() => setExpanded(!expanded)}>
            <CodeIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.code}>{code}</div>
      </Collapse>
    </div>
  );
};

export default withStyles(SandboxStyles, { name: 'Sandbox' })(Sandbox);
