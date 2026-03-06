/**
 * WanderWorld – Gallery Page
 *
 * City dropdown + single carousel. Fetches Unsplash photos for the selected city.
 */

import { useState } from 'react';
import CityCarousel from '../../components/CityCarouselComponent/CityCarousel';
import { useFetch } from '../../hooks/useFetch';
import { cityCosts } from '../../data/destinationsData';
import { translations } from '../../data/translations';

import {
  GallerySection,
  GalleryWrapper,
  GalleryDropdownWrapper,
  GalleryDropdownLabel,
  GallerySelect,
  GalleryMessage,
} from './GalleryStyles';

const CITIES = Object.keys(cityCosts);
const { gallery } = translations;

export default function Gallery() {
  const [selectedCity, setSelectedCity] = useState('');

  const { data: cityData, loading, error } = useFetch(selectedCity);

  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>{gallery.title}</h2>
        <p>{gallery.description}</p>

        <GalleryDropdownWrapper>
          <GalleryDropdownLabel htmlFor="gallery-city-select">
            {gallery.dropdown.label}
          </GalleryDropdownLabel>
          <GallerySelect
            id="gallery-city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            aria-label={gallery.dropdown.ariaLabel}
          >
            <option value="">{gallery.dropdown.placeholder}</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </GallerySelect>
        </GalleryDropdownWrapper>

        {loading && (
          <GalleryMessage>{gallery.messages.loading}</GalleryMessage>
        )}
        {error && (
          <GalleryMessage $error>{gallery.messages.error.replace('{error}', error)}</GalleryMessage>
        )}
        {!loading && !error && cityData && cityData.images?.length > 0 && (
          <CityCarousel city={cityData} />
        )}
        {!loading && !error && selectedCity && cityData && (!cityData.images || cityData.images.length === 0) && (
          <GalleryMessage>{gallery.messages.noImages.replace('{city}', selectedCity)}</GalleryMessage>
        )}
        {!selectedCity && !loading && (
          <GalleryMessage>{gallery.messages.selectCity}</GalleryMessage>
        )}
      </GalleryWrapper>
    </GallerySection>
  );
}
