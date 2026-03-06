import styled from 'styled-components';
import { keyframes } from 'styled-components';
 // ============================================================================
 // Carousel Styles
 // ============================================================================


/** Per-city carousel block: city heading + carousel */
export const GalleryCityBlock = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  &:first-of-type {
    margin-top: ${({ theme }) => theme.spacing.xl};
  }

  h3 {
    color: ${({ theme }) => theme.colors.header};
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;
/** Carousel: one image at a time, all same size, circular navigation */
export const GalleryCarousel = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryCarouselWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const GalleryCarouselViewport = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 16 / 9;
`;

export const GalleryCarouselTrack = styled.div`
  display: flex;
  transition: ${({ $skipTransition }) => ($skipTransition ? 'none' : 'transform 0.3s ease')};
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  height: 100%;
`;

export const GalleryCarouselSlide = styled.figure`
  position: relative;
  flex: 0 0 100%;
  min-width: 100%;
  margin: 0;
  height: 100%;
`;

export const GalleryCarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
`;

export const GalleryCarouselCaption = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

export const GalleryCarouselBtn = styled.button`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  transition: ${({ theme }) => theme.transition};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;



// =============================================================================
// SHIMMER – Loading placeholder for carousel images
// =============================================================================

const shimmerKeyframes = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

/** Shimmer placeholder shown while carousel images load */
export const CarouselShimmer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.border} 0%,
    ${({ theme }) => theme.colors.white} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.white} 75%,
    ${({ theme }) => theme.colors.border} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmerKeyframes} 1.5s ease-in-out infinite;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

// =============================================================================
// CAROUSEL – Gallery carousel
// =============================================================================

