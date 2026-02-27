/**
 * WanderWorld – Gallery Page
 *
 * Carousel with one image at a time. Every image displays at the same size.
 */

import { useState } from 'react';
import { destinations } from '../data/destinations';

import {
  GallerySection,
  GalleryWrapper,
  GalleryCarousel,
  GalleryCarouselWrap,
  GalleryCarouselViewport,
  GalleryCarouselTrack,
  GalleryCarouselSlide,
  GalleryCarouselImg,
  GalleryCarouselCaption,
  GalleryCarouselBtn,
} from '../styles';

const galleryImages = destinations.map((d) => ({
  key: d.id,
  src: d.desktopImage,
  alt: d.name,
  label: d.name,
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const n = galleryImages.length;

  const goPrev = () => setIndex((i) => (i === 0 ? n - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === n - 1 ? 0 : i + 1));

  return (
    <GallerySection>
      <GalleryWrapper>
        <h2>Gallery</h2>
        <p>Explore our collection of stunning destination images.</p>
        <GalleryCarousel>
          <GalleryCarouselWrap>
            <GalleryCarouselBtn type="button" onClick={goPrev} aria-label="Previous">
              ‹
            </GalleryCarouselBtn>
            <GalleryCarouselViewport>
              <GalleryCarouselTrack $index={index}>
                {galleryImages.map((img) => (
                  <GalleryCarouselSlide key={img.key}>
                    <GalleryCarouselImg src={img.src} alt={img.alt} loading="lazy" />
                  </GalleryCarouselSlide>
                ))}
              </GalleryCarouselTrack>
            </GalleryCarouselViewport>
            <GalleryCarouselBtn type="button" onClick={goNext} aria-label="Next">
              ›
            </GalleryCarouselBtn>
          </GalleryCarouselWrap>
          <GalleryCarouselCaption>{galleryImages[index].label}</GalleryCarouselCaption>
        </GalleryCarousel>
      </GalleryWrapper>
    </GallerySection>
  );
}
