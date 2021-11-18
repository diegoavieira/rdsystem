import { WithStyles } from '@material-ui/core';
import RdsFrameStyles from './RdsFrame.styles';

export default interface RdsFrameProps extends WithStyles<typeof RdsFrameStyles> {
  /**
   * Children.
   */
  children?: JSX.Element | JSX.Element[];
}
