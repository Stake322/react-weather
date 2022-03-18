import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

