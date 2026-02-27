/**
 * WanderWorld – Destination Card Component
 *
 * Renders a single destination: responsive image (mobile/desktop), name, tagline,
 * expandable description, and loading/error states for the image.
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

function DestinationCard({ destination }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = imageError
    ? destination.fallbackImage
    : (destination.desktopImage || destination.fallbackImage);

  return (
    <Card>
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
      <CardDescription $show={showDescription}>
        {destination.description}
      </CardDescription>
    </Card>
  );
}

export default memo(DestinationCard);
