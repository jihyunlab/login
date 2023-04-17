import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { theme } from './theme';
import { routes } from './route';

function App() {
  const router = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh' }}>{router}</Box>
    </ThemeProvider>
  );
}

export default App;
