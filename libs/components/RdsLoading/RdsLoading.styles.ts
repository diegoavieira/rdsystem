import { alpha, createStyles, Theme } from '@material-ui/core';

const RdsLoadingStyles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: alpha(theme.palette.common.white, 0.5)
    }
  });

export default RdsLoadingStyles;
