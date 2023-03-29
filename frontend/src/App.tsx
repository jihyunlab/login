import { CssBaseline, Stack, ThemeProvider } from '@mui/material';

import { theme } from './theme';
import Login from './pages/login/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column" minWidth="100vw" minHeight="100vh" sx={{ backgroundColor: '#F0F0F0' }}>
        <Stack direction="row">
          <Login />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
