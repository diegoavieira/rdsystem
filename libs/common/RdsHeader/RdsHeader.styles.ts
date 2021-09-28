import { makeStyles } from '@material-ui/core';

const RdsHeaderStyles = makeStyles(
  (theme) => ({
    title: {
      flexGrow: 1
    },
    fixed: theme.mixins.toolbar
  }),
  { classNamePrefix: 'RdsHeader' }
);

export default RdsHeaderStyles;
