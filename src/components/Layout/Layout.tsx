import React, { FC, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RdsMain, RdsContent, RdsDrawer, RdsHeader, RdsNav, RdsTheme } from '@rdsystem/components';
import { Typography } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';
import LayoutProps from './Layout.props';

const production = process.env.NODE_ENV === 'production';

const Layout: FC<LayoutProps> = ({ children, drawerNavItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [toggle, setToggle] = useState(true);

  const onToggle = () => setToggle(!toggle);

  useEffect(() => {
    setToggle(!isMobile);
  }, [isMobile]);

  return (
    <BrowserRouter basename={production ? '/rdsystem' : '/'}>
      <RdsTheme productionPrefix="rds" theme={{ palette: { type: 'light' } }}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed onToggle={onToggle}>
            <Typography variant="h6" component="span">
              React Design System
            </Typography>
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle}>
            <RdsNav nested={production ? 1 : 0} items={drawerNavItems} toggle={toggle} />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback="Loading...">
              <Switch>{children}</Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </BrowserRouter>
  );
};

export default Layout;
