import React, { FC, ReactNode } from 'react';
import { StylesProvider, createGenerateClassName, ThemeProvider, createTheme } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'rds'
});

const theme = createTheme({});

interface Props {
  children: ReactNode;
}

const AppTheme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>
  </ThemeProvider>
);

export default AppTheme;
