import { createStyles } from '@material-ui/core';

const RdsMainStyles = () =>
  createStyles({
    root: {
      flexGrow: 1
    },
    fixed: {
      height: 'calc(100vh - 56px)',
      overflow: 'auto'
    }
  });

export default RdsMainStyles;
