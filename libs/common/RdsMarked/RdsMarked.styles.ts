import { createStyles, Theme } from '@material-ui/core';

const RdsMarkedStyles = (theme: Theme) =>
  createStyles({
    root: {},
    element: {
      '& h1': {
        ...theme.typography.h1
      },
      '& h2': {
        ...theme.typography.h2
      },
      '& h3': {
        ...theme.typography.h3
      },
      '& h4': {
        ...theme.typography.h4
      },
      '& h5': {
        ...theme.typography.h5
      },
      '& h6': {
        ...theme.typography.h6
      },
      '& p': {
        ...theme.typography.body1
      },
      '& pre': {
        width: '100%',
        display: 'table',
        tableLayout: 'fixed',
        '& code.hljs': {
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius
        }
      }
    }
  });

export default RdsMarkedStyles;
