/**
 * WanderWorld – Central Styled-Components
 *
 * All shared styled components live here. Import from this file instead of
 * defining styles in individual components. Uses theme from ThemeProvider.
 */

import styled, { keyframes } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// =============================================================================
// LAYOUT – Header, logo, navigation, main content area, footer
// =============================================================================

/** Site-wide header bar (dark background, logo + nav) */
export const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    position: relative;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

/** Brand logo link (home) */
export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

/** Wrapper for navigation list */
export const Nav = styled.nav`
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    margin-top: ${({ theme }) => theme.spacing.sm};
    margin-left: 0;
    padding-left: 0;
  }
`;

/** Unordered list of nav links */
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }

  li {
    @media (max-width: 768px) {
      width: auto;
      margin: 0;
      padding: 0;

      &:first-child {
        margin-left: 0;
        padding-left: 0;

        a {
          padding-left: 0;
        }
      }
    }
  }
`;

/** Nav link with active state (aria-current) and hover styles */
export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &[aria-current="page"] {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    text-align: left;
    font-size: 1.1rem;
    white-space: nowrap;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

/** Main content area (grows to fill space; Outlet renders here) */
export const Main = styled.main`
  flex: 1;
`;

/** Site footer (copyright, dark background) */
export const SiteFooter = styled.footer`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 1.25rem ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.lg};

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md} 0.75rem;
    margin-top: 1.25rem;

    p {
      font-size: 0.85rem;
    }
  }
`;


// =============================================================================
// DESTINATION CARD – Card, image container, spinner, button, description
// =============================================================================

/** Keyframe for loading spinner animation */
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  ${({ $clickable }) => $clickable && 'cursor: pointer;'}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};

    h3 {
      font-size: 1.1rem;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
  }
`;

/** Tagline wrapper: reserves space for 2 lines so all cards stay same height */
export const CardTagline = styled.div`
  min-height: 2.8em;
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  flex-shrink: 0;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  picture,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    aspect-ratio: auto;
    min-height: 180px;

    picture,
    img {
      height: auto;
      object-fit: contain;
    }
  }
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(248, 249, 250, 0.9);
  z-index: 10;
  border-radius: 8px;

  p {
    margin-top: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.colors.border};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LearnMoreButton = styled.button`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitionFast};
  margin-top: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(44, 95, 124, 0.3), ${({ theme }) => theme.shadows.xl};
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
`;

export const CardDescription = styled.p`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

// =============================================================================
// MODAL – Overlay, content, close button, image, body
// =============================================================================

/** Full-screen overlay for modal (click to close) */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.lg};
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

/** Modal content box (stops click propagation) */
export const ModalContent = styled.div`
  position: relative;
  max-width: 560px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/** Close button (top-right) */
export const ModalCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`;

/** Modal image area */
export const ModalImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/** Modal text content */
export const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};

  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.header};
  }

  .tagline {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .description {
    margin: 0;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;
 // ============================================================================
 // Carousel Styles
 // ============================================================================

 export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const GalleryItem = styled.figure`
  margin: 0;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const GalleryCaption = styled.figcaption`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

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

