import styled from 'styled-components';

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

/** Dropdown wrapper for city selection in gallery */
export const GalleryDropdownWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, rgba(232, 108, 0, 0.06) 0%, rgba(255, 212, 184, 0.2) 100%);
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const GalleryDropdownLabel = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.header};
  font-size: 1rem;
  white-space: nowrap;
`;

export const GallerySelect = styled.select`
  flex: 1;
  min-width: 200px;
  max-width: 320px;
  padding: 12px 40px 12px 16px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E86C00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(232, 108, 0, 0.15);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(232, 108, 0, 0.2);
  }

  @media (max-width: 480px) {
    min-width: 100%;
    max-width: none;
  }
`;

export const GalleryMessage = styled.p`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme, $error }) => ($error ? '#b91c1c' : theme.colors.textMuted)};
  margin: 0;
`;

