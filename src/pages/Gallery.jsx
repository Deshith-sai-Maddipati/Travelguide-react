/**
 * WanderWorld – Gallery Page
 *
 * Displays a grid of destination images (desktop + mobile variant per
 * destination) with captions. Data is derived from the shared destinations list.
 */

import { destinations } from '../data/destinations';

import {
  GallerySection,
  GalleryWrapper,
  GalleryGrid,
  GalleryItem,
  GalleryImg,
  GalleryCaption,
} from '../styles';

// One entry per destination image variant (desktop and mobile) for the gallery grid
const galleryImages = destinations.flatMap((d) => [
  { key: `${d.id}-desktop`, src: d.desktopImage, alt: `${d.name} (desktop)`, label: d.name },
  { key: `${d.id}-mobile`, src: d.mobileImage, alt: `${d.name} (mobile)`, label: d.name },
]);

export default function Gallery() {
  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>Gallery</h2>
        <p>Explore our collection of stunning destination images.</p>
        <GalleryGrid>
          {galleryImages.map((img) => (
            <GalleryItem key={img.key}>
              <GalleryImg src={img.src} alt={img.alt} loading="lazy" />
              <GalleryCaption>{img.label}</GalleryCaption>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryWrapper>
    </GallerySection>
  );
}
