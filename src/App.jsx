import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TripCalculator from './pages/TripCalculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="trip-calculator" element={<TripCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
