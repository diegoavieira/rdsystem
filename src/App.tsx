import React, { lazy } from 'react';
import { Layout } from '@components';
import { Route } from 'react-router-dom';
import RdsNavProps from '@rdsystem/common/RdsNav/RdsNav.props';
import {
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon,
  WebOutlined as WebOutlinedicon,
  ColorLensOutlined as ColorLensOutlinedIcon,
  BubbleChartOutlined as BubbleChartOutlinedIcon
} from '@material-ui/icons';

const GettingStarted = lazy(() => import('@pages/GettingStarted'));
const LayoutPage = lazy(() => import('@pages/Layout'));

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
        key: 'common',
        title: 'Components',
        icon: <DashboardOutlinedIcon />,
        items: [
          {
            key: 'rds-content',
            title: 'RdsContent',
            path: '/common/rds-content'
          },
          {
            key: 'rds-container',
            title: 'RdsContainer',
            items: [
              {
                key: 'test',
                title: 'RdsContentsss',
                path: '/common/rds-container/test'
              },
              {
                key: 'test1',
                title: 'RdsContainersss',
                path: '/common/rds-container/test1'
              }
            ]
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
    <Route path="/common/rds-content">/common/rds-content</Route>
    <Route path="/common/rds-container/:test">/common/rds-container/test</Route>
  </Layout>
);

export default App;
