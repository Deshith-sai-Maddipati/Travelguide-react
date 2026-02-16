import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Card = styled.article`
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

const PictureContainer = styled.div`
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

const LoadingSpinner = styled.div`
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

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.colors.border};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LearnMoreButton = styled.button`
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

const Description = styled.p`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export default function DestinationCard({ destination, isFilteredOut }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = imageError ? destination.fallbackImage : (destination.desktopImage || destination.fallbackImage);

  return (
    <Card $isFilteredOut={isFilteredOut}>
      <PictureContainer>
        {!imageLoaded && !imageError && (
          <LoadingSpinner>
            <Spinner />
            <p>Loading...</p>
          </LoadingSpinner>
        )}
        <picture>
          <source srcSet={destination.mobileImage} media="(max-width: 600px)" />
          <source srcSet={destination.desktopImage} media="(min-width: 601px)" />
          <img
            src={imgSrc}
            alt={destination.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </picture>
      </PictureContainer>
      <h3>{destination.name}</h3>
      <p>{destination.tagline}</p>
      <LearnMoreButton
        type="button"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        {showDescription ? 'Show Less' : 'Learn More'}
      </LearnMoreButton>
      <Description $show={showDescription}>{destination.description}</Description>
    </Card>
  );
}
