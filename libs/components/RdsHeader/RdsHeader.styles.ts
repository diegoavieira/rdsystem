import { createStyles, Theme } from '@material-ui/core';

const RdsHeaderStyles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1
    },
    toggle: {
      marginRight: theme.spacing(0.5)
    },
    title: {
      flexGrow: 1
    }
  });

export default RdsHeaderStyles;
