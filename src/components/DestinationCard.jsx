import { useState } from 'react';

export default function DestinationCard({ destination, isFilteredOut }) {
  const [showDescription, setShowDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imgSrc = imageError ? destination.fallbackImage : (destination.desktopImage || destination.fallbackImage);

  return (
    <article className={`card ${isFilteredOut ? 'search-no-match' : ''}`}>
      <div className="picture-container">
        {!imageLoaded && !imageError && (
          <div className="loading-spinner">
            <div className="spinner" />
            <p>Loading...</p>
          </div>
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
      </div>
      <h3>{destination.name}</h3>
      <p>{destination.tagline}</p>
      <button
        type="button"
        className="btn learn-more"
        onClick={() => setShowDescription((prev) => !prev)}
      >
        {showDescription ? 'Show Less' : 'Learn More'}
      </button>
      {showDescription && (
        <p className="descriptions show">{destination.description}</p>
      )}
    </article>
  );
}
