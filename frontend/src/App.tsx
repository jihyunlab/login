import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Login from './pages/login/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
