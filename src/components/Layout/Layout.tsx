import React, { FC, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeOptions, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { RdsMain, RdsContent, RdsDrawer, RdsHeader, RdsNav, RdsTheme } from '@rdsystem/components';
import LayoutProps from './Layout.props';

const production = process.env.NODE_ENV === 'production';

const theme: ThemeOptions = {
  palette: {
    type: 'light'
  }
};

const Layout: FC<LayoutProps> = ({ children, drawerNavItems }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const [toggle, setToggle] = useState(true);

  const onToggle = () => setToggle(!toggle);

  useEffect(() => {
    if (isMobile) {
      setToggle(false);
    }
  }, [isMobile]);

  return (
    <BrowserRouter basename={production ? '/rdsystem' : '/'}>
      <RdsTheme productionPrefix="rds" seed="Rds" theme={theme}>
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
