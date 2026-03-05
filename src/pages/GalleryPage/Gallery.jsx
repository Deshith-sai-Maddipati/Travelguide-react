/**
 * WanderWorld – Gallery Page
 *
 * City dropdown + single carousel. Fetches Unsplash photos for the selected city.
 */

import { useState } from 'react';
import CityCarousel from '../../components/CityCarousel';
import { useFetch } from '../../hooks/useFetch';
import { cityCosts } from '../../data/destinationsData';

import {
  GallerySection,
  GalleryWrapper,
  GalleryDropdownWrapper,
  GalleryDropdownLabel,
  GallerySelect,
  GalleryMessage,
} from './GalleryStyles';

const CITIES = Object.keys(cityCosts);

export default function Gallery() {
  const [selectedCity, setSelectedCity] = useState('');

  const { data: cityData, loading, error } = useFetch(selectedCity);

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
