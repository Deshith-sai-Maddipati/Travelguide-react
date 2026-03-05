/**
 * WanderWorld – Destination Card Component
 *
 * Renders a single destination: responsive image (mobile/desktop), name, tagline,
 * expandable description via Learn More button, and loading/error states for the image.
 * Clicking anywhere on the card (except Learn More) opens a modal; Learn More toggles inline description.
 */

import { memo, useState } from 'react';

import {
  Card,
  PictureContainer,
  LoadingSpinner,
  Spinner,
  LearnMoreButton,
  CardDescription,
} from '../styles';

function DestinationCard({ destination, onCardClick }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = imageError
    ? destination.fallbackImage
    : (destination.desktopImage || destination.fallbackImage);

  const handleLearnMoreClick = (e) => {
    e.stopPropagation();
    setShowDescription((prev) => !prev);
  };

  return (
    <Card
      $clickable={!!onCardClick}
      onClick={onCardClick ? () => onCardClick(destination) : undefined}
    >
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
        onClick={handleLearnMoreClick}
      >
        {showDescription ? 'Show Less' : 'Learn More'}
      </LearnMoreButton>
      <CardDescription $show={showDescription}>
        {destination.description}
      </CardDescription>
    </Card>
  );
}

export default memo(DestinationCard);
