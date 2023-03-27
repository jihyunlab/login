import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './locales';
import './assets/fonts/font.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
