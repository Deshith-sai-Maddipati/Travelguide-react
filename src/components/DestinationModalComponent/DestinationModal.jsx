/**
 * WanderWorld – Destination Modal Component
 *
 * Displays a destination in a modal overlay with image, name, tagline, and description.
 * Closes on overlay click, close button, or Escape key.
 */

import { useEffect, useCallback } from 'react';

import { translations } from '../../data/translations';
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalImage,
  ModalBody,
} from './DestinationModalStyles';

const { destinationModal } = translations;

function DestinationModal({ destination, onClose }) {
  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!destination) return;
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [destination, handleEscape]);

  if (!destination) return null;

  const imgSrc = destination.desktopImage || destination.fallbackImage;

  return (
    <ModalOverlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton
          type="button"
          onClick={onClose}
          aria-label={destinationModal.closeAriaLabel}
        >
          ×
        </ModalCloseButton>
        <ModalImage>
          <img src={imgSrc} alt={destination.name} />
        </ModalImage>
        <ModalBody>
          <h2 id="modal-title">{destination.name}</h2>
          <p className="tagline">{destination.tagline}</p>
          <p id="modal-description" className="description">
            {destination.description}
          </p>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}

export default DestinationModal;
