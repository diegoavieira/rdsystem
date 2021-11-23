import { createStyles, Theme } from '@material-ui/core';

const RdsContainerStyles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3)
      }
    },
    disableGutters: {
      padding: 0
    }
  });

export default RdsContainerStyles;
