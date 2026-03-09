/**
 * useFetch – Fetches Unsplash city images for the gallery.
 * Manages loading, error, and data state. Refetches when city changes.
 *
 * @param {string} city - City name to fetch images for
 * @returns {{ data: { id, name, images }|null, loading: boolean, error: string|null }}
 */
import { useState, useEffect } from 'react';

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

export function useFetch(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetchCityImages(city)
      .then((result) => setData(result))
      .catch((err) => {
        setError(err?.message ?? 'Request failed');
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [city]);

  return { data, loading, error };
}
