/* eslint-disable @typescript-eslint/no-explicit-any */
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsMarkedStyles from './RdsMarked.styles';

export default interface RdsMarkedProps extends WithStyles<typeof RdsMarkedStyles> {
  /**
   * File `.md`.
   */
  file: string;
  /**
   * Parent CSS class.
   */
  className?: string;
  /**
   * Components to render `{{sandbox: 'Snippet.tsx'}}`.
   */
  sandboxes?: { [key: string]: { demo?: any; code: any } };
}
