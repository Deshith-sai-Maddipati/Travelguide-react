/**
 * WanderWorld – Gallery Page
 *
 * Per-city carousels. Each city has 2 images (desktop + mobile), all same size (16:9).
 */

import { destinations } from '../data/destinations';
import CityCarousel from '../components/CityCarousel';

import { GallerySection, GalleryWrapper } from '../styles';

export default function Gallery() {
  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>Gallery</h2>
        <p>Explore our collection of stunning destination images.</p>
        {destinations.map((d) => (
          <CityCarousel key={d.id} destination={d} />
        ))}
      </GalleryWrapper>
    </GallerySection>
  );
}
