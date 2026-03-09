import styled, { keyframes } from 'styled-components';
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
