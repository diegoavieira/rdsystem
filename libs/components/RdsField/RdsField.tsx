import React, { FC } from 'react';
import { withStyles, TextField, Theme, alpha } from '@material-ui/core';
import { useField } from 'formik';
import RdsFieldProps from './RdsField.props';
import RdsFieldStyles from './RdsField.styles';
import { createStyles, makeStyles } from '@material-ui/styles';

const FilledInputStyled = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: alpha(theme.palette.primary.main, 0.09),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.09)
        },
        '&$focused': {
          backgroundColor: alpha(theme.palette.primary.main, 0.09)
        }
      },
      focused: {}
    }),
  { name: 'FilledInputStyled' }
);

/**
 * [RdsField Examples](https://diegoavieira.github.io/rdsystem/components/rds-field)
 */
const RdsField: FC<RdsFieldProps> = ({ classes, label, name, hideHelperText, helperText = ' ', margin = 0 }) => {
  const [field, meta] = useField({ name });
  const error = meta.touched && meta.error ? meta.error : '';

  return (
    <TextField
      data-testid="rds-field"
      className={classes.root}
      variant="filled"
      margin="dense"
      label={label}
      helperText={hideHelperText ? null : error || helperText}
      style={{ margin }}
      error={!!error}
      fullWidth
      InputProps={{ classes: FilledInputStyled() }}
      {...field}
    />
  );
};

export default withStyles(RdsFieldStyles, { name: 'RdsField' })(RdsField);
