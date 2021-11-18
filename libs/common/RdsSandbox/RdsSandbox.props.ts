import { WithStyles } from '@material-ui/styles';
import RdsSandboxStyles from './RdsSandbox.styles';
export default interface RdsSandboxProps extends WithStyles<typeof RdsSandboxStyles> {
  /**
   * Demo component.
   */
  demo?: JSX.Element;
  /**
   * Code component.
   */
  code: JSX.Element;
  /**
   * Demo background. If `true` will be default color.
   */
  bg?: boolean;
  /**
   * Demo parent. If `true` parent will be iframe.
   */
  frame?: boolean;
}
