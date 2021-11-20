import { createStyles, Theme } from '@material-ui/core';

const RdsMarkedStyles = (theme: Theme) =>
  createStyles({
    root: {},
    element: {
      '& h1': Object.assign(theme.typography.h3, { fontSize: 40, margin: '16px 0' }),
      '& h2': Object.assign(theme.typography.h4, { fontSize: 30, margin: '40px 0 16px' }),
      '& h3': Object.assign(theme.typography.h5, { margin: '40px 0 16px' }),
      '& h4': Object.assign(theme.typography.h6, { margin: '32px 0 16px' }),
      '& h5': Object.assign(theme.typography.subtitle2, { margin: '32px 0 16px' }),
      '& p, & ul, & ol': {
        marginTop: 0,
        marginBottom: 16
      },
      '& ul': {
        paddingLeft: 30
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
