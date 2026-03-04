/**
 * WanderWorld – City Carousel
 *
 * Per-city carousel with multiple images. Linear prev/next navigation (no wrap).
 */

import { useState } from 'react';

import {
  GalleryCityBlock,
  GalleryCarousel,
  GalleryCarouselWrap,
  GalleryCarouselViewport,
  GalleryCarouselTrack,
  GalleryCarouselSlide,
  GalleryCarouselImg,
  GalleryCarouselCaption,
  GalleryCarouselBtn,
} from '../styles';

export default function CityCarousel({ city }) {
  const { name, images } = city;
  const [index, setIndex] = useState(0);
  const n = images?.length || 0;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(n - 1, i + 1));

  if (!n) return null;

  return (
    <GalleryCityBlock>
      <h3>{name}</h3>
      <GalleryCarousel>
        <GalleryCarouselWrap>
          <GalleryCarouselBtn
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            disabled={index === 0}
          >
            ‹
          </GalleryCarouselBtn>
          <GalleryCarouselViewport>
            <GalleryCarouselTrack $index={index}>
              {images.map((img, i) => (
                <GalleryCarouselSlide key={i}>
                  <GalleryCarouselImg src={img.src} alt={img.alt} loading="lazy" />
                </GalleryCarouselSlide>
              ))}
            </GalleryCarouselTrack>
          </GalleryCarouselViewport>
          <GalleryCarouselBtn
            type="button"
            onClick={goNext}
            aria-label="Next"
            disabled={index === n - 1}
          >
            ›
          </GalleryCarouselBtn>
        </GalleryCarouselWrap>
        <GalleryCarouselCaption>
          {index + 1} / {n}
        </GalleryCarouselCaption>
      </GalleryCarousel>
    </GalleryCityBlock>
  );
}
