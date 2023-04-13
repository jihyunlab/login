import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './route';
import Router from './components/route/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{ width: '100vw', height: '100vh' }}>
          <Router routes={routes} />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
