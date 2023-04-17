import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import { BrowserRouter } from 'react-router-dom';
import './locales';
import './assets/fonts/font.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
