# Theme

**RdsTheme** is the component responsible for changing the theme. The **theme** attribute receives all the properties of the [Default Theme - Material-UI ](https://v4.mui.com/customization/default-theme/#default-theme).

## Color

This documentation uses the schema:

```tsx
const theme: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#fff'
    },
    secondary: {
      light: '#9c786c',
      main: '#6d4c41',
      dark: '#40241a',
      contrastText: '#fff'
    }
  }
};

<RdsTheme theme={theme}>children</RdsTheme>;
```
