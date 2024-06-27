import React from 'react';
import App from './App.jsx';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store/index.jsx';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
