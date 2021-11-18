import React, { FC, useState } from 'react';
import { Card, IconButton, Collapse, Toolbar, withStyles, Tooltip } from '@material-ui/core';
import { Code as CodeIcon } from '@material-ui/icons';
import RdsSandboxProps from './RdsSandbox.props';
import RdsSandboxStyles from './RdsSandbox.styles';
import RdsFrame from '../RdsFrame';
import clsx from 'clsx';

/**
 * [RdsSandbox Examples](https://diegoavieira.github.io/rdsystem/common/rds-sandbox)
 */
const RdsSandbox: FC<RdsSandboxProps> = ({ demo, code, bg, frame, classes }) => {
  const [expanded, setExpanded] = useState(!demo);

  return (
    <div className={classes.root}>
      <Card className={clsx(classes.demo, { [classes.bg]: bg })} variant="outlined">
        {frame ? <RdsFrame>{demo}</RdsFrame> : demo}
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

export default withStyles(RdsSandboxStyles, { name: 'RdsSandbox' })(RdsSandbox);
