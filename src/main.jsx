/**
 * WanderWorld – Application Entry Point
 *
 * Bootstraps the React app with StrictMode for development checks,
 * loads global CSS, and mounts the root App component.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';

// Mount the app into the DOM element with id="root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
