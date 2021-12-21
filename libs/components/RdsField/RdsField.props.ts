import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ReactNode } from 'react';
import RdsFieldStyles from './RdsField.styles';

export default interface RdsFieldProps extends WithStyles<typeof RdsFieldStyles> {
  /**
   * Name.
   */
  name: string;
  /**
   * Label.
   */
  label?: string;
  /**
   * Helper text.
   */
  helperText?: string | ReactNode;
  /**
   * Hide helperText.
   */
  hideHelperText?: boolean;
  /**
   * Margin. Default is 0.
   */
  margin?: string | number;
  /**
   * Width. Default is initial.
   */
  width?: string;
  /**
   * Dense.
   */
  dense?: boolean;
  /**
   * Disabled.
   */
  disabled?: boolean;
  /**
   * Required.
   */
  required?: boolean;
  /**
   * Input type. Default is text.
   */
  type?: 'text' | 'number' | 'file' | 'password' | 'tel' | 'email';
  /**
   * Datepicker.
   */
  datepicker?: boolean;
  /**
   * Min date.
   */
  minDate?: Date;
  /**
   * Timepicker.
   */
  timepicker?: boolean;
  /**
   * Multiline.
   */
  multiline?: boolean;
  /**
   * Max rows. Default is 4.
   */
  maxRows?: string | number;
  /**
   * Min rows. Default is 4.
   */
  minRows?: string | number;
  /**
   * Min when type is number. Default is 0;
   */
  min?: number;
}
