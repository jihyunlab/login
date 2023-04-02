import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Login from './pages/login/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <Login />
      </Box>
    </ThemeProvider>
  );
}

export default App;
