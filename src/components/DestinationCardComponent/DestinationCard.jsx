/**
 * WanderWorld – Destination Card Component
 *
 * Renders a single destination: responsive image (mobile/desktop), name, tagline,
 * expandable description via Learn More button, and loading/error states for the image.
 * Clicking anywhere on the card (except Learn More) opens a modal; Learn More toggles inline description.
 */

import { memo, useState } from 'react';

import { useImageUrl } from '../../context/ImageBaseUrlContext';
import { translations } from '../../data/translations';
import {
  Card,
  PictureContainer,
  LoadingSpinner,
  Spinner,
  LearnMoreButton,
  CardDescription,
  CardTagline,
} from './DestinationCardStyles';

const { destinationCard } = translations;

function DestinationCard({ destination, onCardClick }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageUrl = useImageUrl();
  const imgSrc = imageError
    ? imageUrl(destination.fallbackImage)
    : imageUrl(destination.desktopImage || destination.fallbackImage);
  const mobileSrc = imageUrl(destination.mobileImage);
  const desktopSrc = imageUrl(destination.desktopImage);

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
            <p>{destinationCard.loading}</p>
          </LoadingSpinner>
        )}
        <picture>
          <source srcSet={mobileSrc} media="(max-width: 600px)" />
          <source srcSet={desktopSrc} media="(min-width: 601px)" />
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
      <CardTagline>{destination.tagline}</CardTagline>

      <LearnMoreButton
        type="button"
        onClick={handleLearnMoreClick}
      >
        {showDescription ? destinationCard.showLess : destinationCard.learnMore}
      </LearnMoreButton>
      <CardDescription $show={showDescription}>
        {destination.description}
      </CardDescription>
    </Card>
  );
}

export default memo(DestinationCard);
