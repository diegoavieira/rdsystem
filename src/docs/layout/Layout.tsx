import React, { FC, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ThemeOptions, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import {
  RdsMain,
  RdsContent,
  RdsDrawer,
  RdsHeader,
  RdsNav,
  RdsTheme,
  RdsContainer,
  RdsTitle
} from '@rdsystem/components';
import RdsNavProps from '@rdsystem/components/RdsNav/RdsNav.props';
import {
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon
} from '@material-ui/icons';

const theme: ThemeOptions = {
  palette: {
    type: 'light'
  }
};

const drawerNavItems: RdsNavProps['items'] = [
  {
    key: 'main',
    items: [
      {
        key: 'route',
        title: 'Route',
        icon: <PlayCircleOutlineOutlinedIcon />,
        path: '/'
      },
      {
        key: 'collapse',
        title: 'Collapse',
        icon: <DashboardOutlinedIcon />,
        items: [
          {
            key: 'collapsed',
            title: 'Collapsed',
            path: '/collapse/collapsed'
          }
        ]
      }
    ]
  }
];

// Prop document is injected by the documentation to work in an iframe.
// You won't need it on your project.

const Layout: FC<{ document?: Document }> = ({ document }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const [toggle, setToggle] = useState(true);

  const onToggle = () => setToggle(!toggle);

  useEffect(() => {
    if (isMobile) {
      setToggle(false);
    }
  }, [isMobile]);

  // Router with 'createMemoryHistoy()' is used to work in an iframe.
  // You won't need it on your project. Use BrowserRouter.

  return (
    <Router history={createMemoryHistory()}>
      <RdsTheme productionPrefix="rds" seed="Rds" theme={theme}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed onToggle={onToggle}>
            <RdsTitle type="span">Layout</RdsTitle>
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle} document={document}>
            <RdsNav document={document} items={drawerNavItems} toggle={toggle} />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback="Loading...">
              <Switch>
                <Route exact path="/">
                  <RdsContainer>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
                      quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat.
                      Vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi
                      tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis
                      tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                      adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
                      commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue
                      eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                      donec massa sapien faucibus et molestie ac.
                    </Typography>
                  </RdsContainer>
                </Route>
                <Route path="/collapse/collapsed">
                  <RdsContainer>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    </Typography>
                  </RdsContainer>
                </Route>
              </Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </Router>
  );
};

export default Layout;
