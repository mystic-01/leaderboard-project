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
});

export default theme;