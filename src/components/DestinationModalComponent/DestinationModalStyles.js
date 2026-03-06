import styled from 'styled-components';
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