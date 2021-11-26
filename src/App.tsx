import React, { lazy } from 'react';
import { Layout } from '@components';
import { Route } from 'react-router-dom';
import RdsNavProps from '@rdsystem/components/RdsNav/RdsNav.props';
import {
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon,
  WebOutlined as WebOutlinedicon,
  ColorLensOutlined as ColorLensOutlinedIcon,
  BubbleChartOutlined as BubbleChartOutlinedIcon
} from '@material-ui/icons';

const GettingStarted = lazy(() => import('@pages/GettingStarted'));
const LayoutPage = lazy(() => import('@pages/Layout'));
const InstallComponents = lazy(() => import('@pages/components/Installation'));

const drawerNavItems: RdsNavProps['items'] = [
  {
    key: 'main',
    items: [
      {
        key: 'getting-started',
        title: 'Getting Started',
        icon: <PlayCircleOutlineOutlinedIcon />,
        path: '/'
      },
      {
        key: 'layout',
        title: 'Layout',
        icon: <WebOutlinedicon />,
        path: '/layout'
      },
      {
        key: 'theme',
        title: 'Theme',
        icon: <ColorLensOutlinedIcon />,
        path: '/theme'
      },
      {
        key: 'components',
        title: 'Components',
        icon: <DashboardOutlinedIcon />,
        items: [
          {
            key: 'installation',
            title: 'Installation',
            path: '/components/installation'
          },
          {
            key: 'rds-content',
            title: 'RdsContent',
            path: '/components/rds-content'
          },
          {
            key: 'rds-container',
            title: 'RdsContainer',
            path: '/components/rds-container'
          }
        ]
      },
      {
        key: 'hooks',
        title: 'Hooks',
        icon: <BubbleChartOutlinedIcon />,
        items: [
          {
            key: 'rds-use-fetch',
            title: 'rdsUseFecth',
            path: '/hooks/rds-use-fetch'
          }
        ]
      }
    ]
  }
];

const App = () => (
  <Layout drawerNavItems={drawerNavItems}>
    <Route exact path="/">
      <GettingStarted />
    </Route>
    <Route path="/layout">
      <LayoutPage />
    </Route>
    <Route path="/theme">Theme Page</Route>
    <Route path="/components/installation">
      <InstallComponents />
    </Route>
  </Layout>
);

export default App;
