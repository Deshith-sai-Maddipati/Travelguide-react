/**
 * WanderWorld – Application Entry Point
 *
 * Bootstraps the React app with StrictMode for development checks,
 * loads global CSS, and mounts the root App component.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';

// Mount the app into the DOM element with id="root"
// BrowserRouter here for standalone mode; when federated, host provides the Router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
