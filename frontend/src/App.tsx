import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import PrivateRoute from './components/route/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{ width: '100vw', height: '100vh' }}>
          <Routes>
            <Route key="/" path="/" element={<Navigate to="/home" replace />} />
            <Route key="/login" path="/login" element={<Login />} />
            <Route element={<PrivateRoute errorElement={<Navigate to="/login" replace />} />}>
              <Route key="/home" path="/home" element={<Home />} />
            </Route>
            <Route key="*" path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
