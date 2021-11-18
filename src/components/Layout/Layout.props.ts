import RdsNavProps from '@rdsystem/common/RdsNav/RdsNav.props';

export default interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  drawerNavItems: RdsNavProps['items'];
}
