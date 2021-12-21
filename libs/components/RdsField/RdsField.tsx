import React, { FC } from 'react';
import { withStyles, TextField, Theme } from '@material-ui/core';
import { AccessTimeOutlined as AccessTimeOutlinedIcon, EventOutlined as EventOutlinedIcon } from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
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
  required,
  type = 'text',
  datepicker,
  minDate,
  timepicker
}) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error ? meta.error : '';

  return (
    <>
      {!datepicker && !timepicker && (
        <TextField
          data-testid="rds-field"
          className={classes.root}
          variant="outlined"
          size={dense ? 'small' : 'medium'}
          label={label}
          type={type}
          helperText={hideHelperText ? null : error || helperText}
          style={{ margin }}
          error={!!error}
          fullWidth
          InputProps={{ classes: OutlinedInputStyled() }}
          disabled={disabled}
          required={required}
          {...field}
        />
      )}
      {datepicker && (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            className={classes.root}
            label={label}
            variant="inline"
            inputVariant="outlined"
            InputProps={{ classes: OutlinedInputStyled() }}
            disableToolbar
            autoOk
            format="DD/MM/YYYY"
            helperText={hideHelperText ? null : error || helperText}
            error={!!error}
            {...field}
            onChange={(date) => helpers.setValue(date)}
            KeyboardButtonProps={{ edge: 'end' }}
            size={dense ? 'small' : 'medium'}
            disabled={disabled}
            required={required}
            style={{ margin }}
            minDate={minDate}
            keyboardIcon={<EventOutlinedIcon />}
          />
        </MuiPickersUtilsProvider>
      )}
      {timepicker && (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardTimePicker
            className={classes.root}
            label={label}
            variant="inline"
            inputVariant="outlined"
            InputProps={{ classes: OutlinedInputStyled() }}
            disableToolbar
            autoOk
            ampm={false}
            format="HH:mm"
            helperText={hideHelperText ? null : error || helperText}
            error={!!error}
            {...field}
            onChange={(date) => helpers.setValue(date)}
            KeyboardButtonProps={{ edge: 'end' }}
            size={dense ? 'small' : 'medium'}
            disabled={disabled}
            required={required}
            style={{ margin }}
            keyboardIcon={<AccessTimeOutlinedIcon />}
          />
        </MuiPickersUtilsProvider>
      )}
    </>
  );
};

export default withStyles(RdsFieldStyles, { name: 'RdsField' })(RdsField);
