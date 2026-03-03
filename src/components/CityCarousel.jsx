/**
 * WanderWorld – City Carousel
 *
 * Per-city carousel showing desktop + mobile images. All images same size (16:9).
 * Linear prev/next navigation (no wrap).
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

export default function CityCarousel({ destination }) {
  const images = [
    { key: 'desktop', src: destination.desktopImage, alt: `${destination.name} (desktop)` },
    { key: 'mobile', src: destination.mobileImage, alt: `${destination.name} (mobile)` },
  ];
  const [index, setIndex] = useState(0);
  const n = images.length;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(n - 1, i + 1));

  const labels = ['Desktop view', 'Mobile view'];

  return (
    <GalleryCityBlock>
      <h3>{destination.name}</h3>
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
              {images.map((img) => (
                <GalleryCarouselSlide key={img.key}>
                  <GalleryCarouselImg src={img.src} alt={img.alt} loading="lazy" $isMobile={img.key === 'mobile'} />
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
        <GalleryCarouselCaption>{labels[index]}</GalleryCarouselCaption>
      </GalleryCarousel>
    </GalleryCityBlock>
  );
}
