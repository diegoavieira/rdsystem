import React, { FC } from 'react';
import { withStyles, TextField, Theme } from '@material-ui/core';
import { useField } from 'formik';
import RdsFieldProps from './RdsField.props';
import RdsFieldStyles from './RdsField.styles';
import { createStyles, makeStyles } from '@material-ui/styles';

const OutlinedInputStyled = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '&:hover $notchedOutline, &$focused $notchedOutline, &$error $notchedOutline, &$disabled $notchedOutline': {
          borderColor: theme.palette.divider,
          borderWidth: 1
        }
      },
      notchedOutline: {
        borderColor: theme.palette.divider
      },
      error: {},
      focused: {},
      disabled: {}
    }),
  { name: 'OutlinedInputStyled' }
);

/**
 * [RdsField Examples](https://diegoavieira.github.io/rdsystem/components/rds-field)
 */
const RdsField: FC<RdsFieldProps> = ({
  classes,
  label,
  name,
  hideHelperText,
  helperText = ' ',
  margin = 0,
  dense,
  disabled,
  required
}) => {
  const [field, meta] = useField({ name });
  const error = meta.touched && meta.error ? meta.error : '';

  return (
    <TextField
      data-testid="rds-field"
      className={classes.root}
      variant="outlined"
      size={dense ? 'small' : 'medium'}
      label={label}
      helperText={hideHelperText ? null : error || helperText}
      style={{ margin }}
      error={!!error}
      fullWidth
      InputProps={{ classes: OutlinedInputStyled() }}
      disabled={disabled}
      required={required}
      {...field}
    />
  );
};

export default withStyles(RdsFieldStyles, { name: 'RdsField' })(RdsField);
