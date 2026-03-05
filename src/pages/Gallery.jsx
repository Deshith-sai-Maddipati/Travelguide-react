/**
 * WanderWorld – Gallery Page
 *
 * City dropdown + single carousel. Fetches Unsplash photos for the selected city.
 */

import { useState, useEffect } from 'react';
import CityCarousel from '../components/CityCarousel';

import {
  GallerySection,
  GalleryWrapper,
  GalleryDropdownWrapper,
  GalleryDropdownLabel,
  GallerySelect,
  GalleryMessage,
} from '../styles';

const CITIES = [
  'Hyderabad', 'Paris', 'Tokyo', 'Bali', 'Barcelona', 'Rome',
  'New York', 'London', 'Dubai', 'Sydney', 'Amsterdam', 'Bangkok',
  'Lisbon', 'Cape Town', 'Kerala', 'Singapore',
];

const UNSPLASH_ACCESS_KEY = 'Q913ARd1rH_glUJxYHy2d3IcGvP5-_VobsQmWJ8KUrM';

const GALLERY_ASPECT = { w: 800, h: 450 }; // 16:9

function fetchCityImages(city) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=8&orientation=landscape`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch ${city}`);
      return res.json();
    })
    .then((data) => {
      const images = (data.results || []).map((photo) => {
        const base = photo.urls?.raw || photo.urls?.regular || photo.urls?.full || '';
        const src = base.includes('?')
          ? `${base}&w=${GALLERY_ASPECT.w}&h=${GALLERY_ASPECT.h}&fit=scale`
          : `${base}?w=${GALLERY_ASPECT.w}&h=${GALLERY_ASPECT.h}&fit=scale`;
        return {
          src,
          alt: photo.alt_description || photo.description || `${city} photo`,
        };
      });
      return { id: city.toLowerCase().replace(/\s+/g, '-'), name: city, images };
    });
}

export default function Gallery() {
  const [selectedCity, setSelectedCity] = useState('');
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCity) {
      setCityData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    fetchCityImages(selectedCity)
      .then((data) => {
        setCityData(data);
      })
      .catch((err) => {
        setError(err.message);
        setCityData(null);
        console.error('Error fetching gallery:', err);
      })
      .finally(() => setLoading(false));
  }, [selectedCity]);

  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>Gallery</h2>
        <p>Explore stunning destination images. Select a city to explore its gallery.</p>

        <GalleryDropdownWrapper>
          <GalleryDropdownLabel htmlFor="gallery-city-select">
            Choose a destination
          </GalleryDropdownLabel>
          <GallerySelect
            id="gallery-city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            aria-label="Select city for gallery"
          >
            <option value="">Select a city…</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </GallerySelect>
        </GalleryDropdownWrapper>

        {loading && (
          <GalleryMessage>Loading photos…</GalleryMessage>
        )}
        {error && (
          <GalleryMessage $error>Error: {error}</GalleryMessage>
        )}
        {!loading && !error && cityData && cityData.images?.length > 0 && (
          <CityCarousel city={cityData} />
        )}
        {!loading && !error && selectedCity && cityData && (!cityData.images || cityData.images.length === 0) && (
          <GalleryMessage>No images found for {selectedCity}.</GalleryMessage>
        )}
        {!selectedCity && !loading && (
          <GalleryMessage>Select a city above to explore its gallery.</GalleryMessage>
        )}
      </GalleryWrapper>
    </GallerySection>
  );
}
