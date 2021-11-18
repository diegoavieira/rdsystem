import React, { FC } from 'react';
import RdsThemeProps from './RdsTheme.props';
import { createGenerateClassName, createTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';

/**
 * [RdsTheme Examples](https://diegoavieira.github.io/rdsystem/common/rds-theme)
 */
const RdsTheme: FC<RdsThemeProps> = ({ children, theme, productionPrefix, seed }): JSX.Element => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <StylesProvider generateClassName={createGenerateClassName({ productionPrefix, seed })}>
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default RdsTheme;
