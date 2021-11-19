import React, { FC, Suspense, useEffect, useState } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { RdsMain, RdsContent, RdsDrawer, RdsHeader, RdsNav, RdsTheme } from '@rdsystem/common';
import { Typography } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';
import LayoutProps from './Layout.props';

const Layout: FC<LayoutProps> = ({ children, drawerNavItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [toogle, setToogle] = useState(true);

  const onToogle = () => setToogle(!toogle);

  useEffect(() => {
    setToogle(!isMobile);
  }, [isMobile]);

  return (
    <HashRouter>
      <RdsTheme productionPrefix="rds" theme={{ palette: { type: 'light' } }}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed onToogle={onToogle}>
            <Typography variant="h6" component="span">
              React Design System
            </Typography>
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toogle={toogle} onToogle={onToogle}>
            <RdsNav items={drawerNavItems} toogle={toogle} />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback="Loading...">
              <Switch>{children}</Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </HashRouter>
  );
};

export default Layout;
