/**
 * WanderWorld – City Carousel
 *
 * Per-city carousel with multiple images. Linear prev/next navigation (no wrap).
 * Shows shimmer placeholder while each image loads.
 */

import { useState, useCallback, useEffect } from 'react';

import { translations } from '../../data/translations';
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
  CarouselShimmer,
} from './CityCarouselStyles';

const { cityCarousel } = translations;

export default function CityCarousel({ city }) {
  const { name, images } = city;
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const n = images?.length || 0;

  useEffect(() => {
    setIndex(0);
    setLoadedImages(new Set());
  }, [name]);

  const handleImageLoad = useCallback((i) => {
    setLoadedImages((prev) => new Set([...prev, i]));
  }, []);

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
            aria-label={cityCarousel.prevAriaLabel}
            disabled={index === 0}
          >
            ‹
          </GalleryCarouselBtn>
          <GalleryCarouselViewport>
            <GalleryCarouselTrack $index={index}>
              {images.map((img, i) => (
                <GalleryCarouselSlide key={i}>
                  <GalleryCarouselImg
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(i)}
                  />
                  <CarouselShimmer $visible={!loadedImages.has(i)} aria-hidden="true" />
                </GalleryCarouselSlide>
              ))}
            </GalleryCarouselTrack>
          </GalleryCarouselViewport>
          <GalleryCarouselBtn
            type="button"
            onClick={goNext}
            aria-label={cityCarousel.nextAriaLabel}
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
