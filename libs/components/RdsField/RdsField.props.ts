import { WithStyles } from '@material-ui/core/styles/withStyles';
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
  helperText?: string;
  /**
   * Hide helperText.
   */
  hideHelperText?: boolean;
  /**
   * Text margin. Default is 0.
   */
  margin?: string | number;
}
