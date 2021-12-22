import React, { FC, ForwardedRef, forwardRef } from 'react';
import { withStyles, TextField, Theme } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { AccessTimeOutlined as AccessTimeOutlinedIcon, EventOutlined as EventOutlinedIcon } from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import { createStyles, makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { useField } from 'formik';
import RdsFieldProps from './RdsField.props';
import RdsFieldStyles from './RdsField.styles';
import RdsList from '../RdsList';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

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
  width = 'initial',
  dense,
  disabled,
  required,
  type = 'text',
  datepicker,
  minDate,
  timepicker,
  multiline,
  minRows = 4,
  maxRows = 4,
  min = 0,
  select,
  selectedAttr = 'key',
  items = [],
  multiple
}) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error ? meta.error : '';

  const mergeItems = (items: RdsListItemProps['item'][]): RdsListItemProps['item'][] => {
    return items.map((item) => {
      if (item.items) {
        return { ...item, items: mergeItems(item.items) };
      } else {
        return {
          ...item,
          action: () => {
            item.action && item.action(item);
            console.log('click');
            helpers.setValue(item);
          }
        };
      }
    });
  };

  return (
    <>
      {!datepicker && !timepicker && !select && (
        <TextField
          data-testid="rds-field"
          className={classes.root}
          variant="outlined"
          size={dense ? 'small' : 'medium'}
          label={label}
          type={type}
          helperText={hideHelperText ? null : error || helperText}
          style={{ margin, width }}
          error={!!error}
          InputProps={{ classes: OutlinedInputStyled() }}
          FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
          inputProps={{ className: 'rds-scrollbar', min }}
          disabled={disabled}
          required={required}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
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
            style={{ margin, width }}
            FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
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
            style={{ margin, width }}
            FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
            keyboardIcon={<AccessTimeOutlinedIcon />}
          />
        </MuiPickersUtilsProvider>
      )}
      {select && (
        <Autocomplete
          data-testid="rds-field"
          className={classes.root}
          options={items}
          getOptionLabel={(option) => option[selectedAttr]}
          getOptionSelected={(option, value) => option[selectedAttr] === value[selectedAttr]}
          style={{ margin, width }}
          onChange={(event, value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          selectOnFocus={false}
          value={field.value}
          openText={''}
          clearText={''}
          disabled={disabled}
          multiple={multiple}
          disableCloseOnSelect={multiple}
          open
          ListboxComponent={forwardRef(function ListboxComponent(props, ref) {
            return (
              <div ref={ref as ForwardedRef<HTMLDivElement>}>
                <RdsList items={mergeItems(items)} />
              </div>
            );
          })}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              name={name}
              label={label}
              size={dense ? 'small' : 'medium'}
              helperText={hideHelperText ? null : error || helperText}
              InputProps={{
                ...params.InputProps,
                classes: OutlinedInputStyled()
              }}
              error={!!error}
              FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
              required={required}
            />
          )}
        />
      )}
    </>
  );
};

export default withStyles(RdsFieldStyles, { name: 'RdsField' })(RdsField);
