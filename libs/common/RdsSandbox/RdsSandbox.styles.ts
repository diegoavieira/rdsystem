import { createStyles, Theme } from '@material-ui/core';

const RdsSandboxStyles = (theme: Theme) =>
  createStyles({
    root: {},
    demo: {
      display: 'flex'
    },
    bg: {
      background: theme.palette.background.default
    },
    toolbar: {
      padding: 0,
      justifyContent: 'flex-end'
    },
    code: {
      '& pre': {
        margin: 0
      },
      maxHeight: '500px',
      overflow: 'auto'
    }
  });

export default RdsSandboxStyles;
