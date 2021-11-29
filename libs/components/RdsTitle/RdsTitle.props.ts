import { WithStyles } from '@material-ui/core/styles/withStyles';
import TitleStyles from './RdsTitle.styles';

export default interface TitleProps extends WithStyles<typeof TitleStyles> {
  /**
   * Title content.
   */
  children: string;
  /**
   * Title type. Default is h1.
   */
  type?: 'h1' | 'h2' | 'span';
  /**
   * Title weight be 300.
   */
  light?: boolean;
  /**
   * Title color. Default is initial.
   */
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}
