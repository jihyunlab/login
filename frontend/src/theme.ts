import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: (factor: number) => `${0.5 * factor}rem`,
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
          fontSize: '0.75rem',
          padding: '0.25rem 1rem 0.25rem 1rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          transform: 'rotate(-0.03deg)',
        },
      },
      defaultProps: {
        sx: {
          margin: 'dense',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
        margin: 'dense',
        InputLabelProps: { shrink: true },
      },
    },
  },
});

export { theme };
