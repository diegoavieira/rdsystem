import React, { FC, Suspense, useEffect, useState } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { ThemeOptions, useTheme, useMediaQuery, withStyles, createStyles } from '@material-ui/core';
import {
  RdsMain,
  RdsContent,
  RdsDrawer,
  RdsHeader,
  RdsNav,
  RdsTheme,
  RdsContainer,
  RdsTitle,
  RdsAvatar,
  RdsText,
  RdsLoading
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

const RdsTitleStyled = withStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
)(RdsTitle);

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

  // MemoryRouter is used to work in an iframe.
  // You won't need it on your project. Use BrowserRouter.

  return (
    <MemoryRouter>
      <RdsTheme productionPrefix="rds" seed="Rds" theme={theme}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed onToggle={onToggle}>
            <RdsTitleStyled type="span">Layout</RdsTitleStyled>
            <RdsAvatar />
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle} document={document}>
            <RdsNav
              document={document}
              items={drawerNavItems}
              toggle={toggle}
              onToggle={isMobile ? onToggle : undefined}
            />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback={<RdsLoading />}>
              <Switch>
                <Route exact path="/">
                  <RdsContainer>
                    <RdsText margin="0 0 16px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
                      quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat.
                      Vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </RdsText>
                    <RdsText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
                      quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                      vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </RdsText>
                  </RdsContainer>
                </Route>
                <Route path="/collapse/collapsed">
                  <RdsContainer>
                    <RdsText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    </RdsText>
                  </RdsContainer>
                </Route>
              </Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </MemoryRouter>
  );
};

export default Layout;
