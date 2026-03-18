/**
 * WanderWorld – Root App Component
 *
 * Wraps the app in ThemeProvider (styled-components) and BrowserRouter (React Router).
 * Defines all top-level routes; Layout wraps child routes and provides header/footer + Outlet.
 * Pages are lazy-loaded for smaller initial bundle and faster first paint.
 */

import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { ImageBaseUrlContext } from './context/ImageBaseUrlContext';
import { theme } from './theme';
import { translations } from './data/translations';
import Layout from './components/LayoutComponent/Layout';

// Lazy-load pages so each route is in its own chunk (code splitting)
const Home = lazy(() => import('./pages/HomePage/Home'));
const Destinations = lazy(() => import('./pages/DestinationsPage/Destinations'));
const Gallery = lazy(() => import('./pages/GalleryPage/Gallery'));
const Contact = lazy(() => import('./pages/ContactPage/Contact'));
const TripCalculator = lazy(() => import('./pages/TripCalculatorPage/TripCalculator'));

function RouteFallback() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }} aria-live="polite">
      {translations.app.loadingFallback}
    </div>
  );
}

function App({ imageBaseUrl = '' }) {
  return (
    <ThemeProvider theme={theme}>
      <ImageBaseUrlContext.Provider value={imageBaseUrl}>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
            {/* Layout wraps all pages: header, main content (Outlet), footer */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="destinations" element={<Destinations />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="trip-calculator" element={<TripCalculator />} />
            </Route>
        </Routes>
      </Suspense>
      </ImageBaseUrlContext.Provider>
    </ThemeProvider>
  );
}

export default App;
