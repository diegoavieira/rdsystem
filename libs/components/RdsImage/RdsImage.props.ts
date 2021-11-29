import { WithStyles } from '@material-ui/core/styles/withStyles';
import ImageStyles from './RdsImage.styles';

export default interface ImageProps extends WithStyles<typeof ImageStyles> {
  /**
   * Image source.
   */
  src: string;
  /**
   * Image width. Default is auto.
   */
  width?: number | string;
  /**
   * Image height. Default is auto.
   */
  height?: number | string;
}
