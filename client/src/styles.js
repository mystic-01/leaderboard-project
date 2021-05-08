import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#8C30F5",
      },
      secondary: {
        main: "#FF0000",
      },
    },
    typography: {
      fontFamily: 'Raleway',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 800,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
});

export default theme;