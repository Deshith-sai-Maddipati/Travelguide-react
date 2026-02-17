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
// HOME – Hero, features, Trip Calculator CTA
// =============================================================================

/** Full-width hero section (gradient, CTA) */
export const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const HeroTagline = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.4;
`;

export const HeroSubtext = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing['2xl']};
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

export const HeroCTA = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitionFast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.header};
  }
`;

export const HomeWhy = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    color: ${({ theme }) => theme.colors.header};
  }
`;

export const HomeFeatures = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: left;
`;

export const HomeFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HomeFeatureIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const HomeTripCalc = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TripCalcLink = styled(Link)`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

// =============================================================================
// DESTINATIONS – Section, search input, cards grid
// =============================================================================

/** Wrapper for destinations page (heading + search + grid) */
export const DestinationsSection = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.header};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    h2 {
      font-size: 1.75rem;
      padding: 0 ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
`;

export const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 20px;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(44, 95, 124, 0.2), ${({ theme }) => theme.shadows.md};
  }

  &::placeholder {
    color: #9CA3AF;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    padding: 0.75rem;
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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  ${({ $isFilteredOut }) =>
    $isFilteredOut &&
    `
    background-color: #E5E7EB;
    opacity: 0.5;
    filter: grayscale(0.3);

    &:hover {
      opacity: 0.6;
    }
  `}

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

export const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  picture,
  img {
    width: 100%;
    display: block;
    border-radius: 8px;
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
  margin-top: ${({ theme }) => theme.spacing.sm};

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
// GALLERY – Section, grid, item, image, caption
// =============================================================================

/** Wrapper for gallery page */
export const GallerySection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

export const GalleryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme.colors.header};
  }
`;

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

// =============================================================================
// CONTACT – Main container, title, sections, text, social
// =============================================================================

/** Page wrapper for contact content */
export const ContactMain = styled.div`
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing['3xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContactTitle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ContactSocial = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

// =============================================================================
// TRIP CALCULATOR – Form container, inputs, submit button, result
// =============================================================================

/** Page wrapper for calculator */
export const CalculatorMain = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1024px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: 0.75rem;
  }
`;

export const CalculatorTitle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const CalculatorSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const CalculatorInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const CalculatorSubmitButton = styled.button`
  width: 100%;
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

export const CalculatorResult = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorResultMessage = styled.p`
  color: ${({ theme }) => theme.colors.header};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
