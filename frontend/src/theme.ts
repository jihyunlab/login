import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#36A660',
    },
  },
  typography: {
    fontFamily: 'WebNanumSquareNeo',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontSize: '0.69rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
      },
    },
  },
});

export { theme };
