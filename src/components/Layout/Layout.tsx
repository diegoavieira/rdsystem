import React, { FC, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeOptions, useTheme, useMediaQuery } from '@material-ui/core';
import {
  RdsMain,
  RdsContent,
  RdsDrawer,
  RdsHeader,
  RdsNav,
  RdsTheme,
  RdsTitle,
  RdsLoading
} from '@rdsystem/components';
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
            <RdsTitle type="span">React Design System</RdsTitle>
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle}>
            <RdsNav
              nested={production ? 1 : 0}
              items={drawerNavItems}
              toggle={toggle}
              onToggle={isMobile ? onToggle : undefined}
            />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback={<RdsLoading />}>
              <Switch>{children}</Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </BrowserRouter>
  );
};

export default Layout;
